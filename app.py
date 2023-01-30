from flask import Flask
from flask import render_template, request, redirect, flash, jsonify
from flask_mysqldb import MySQL,MySQLdb
from flask.helpers import url_for
from flaskext.mysql import MySQL
from flask import send_from_directory
from datetime import datetime

import os

app = Flask(__name__)

app.secret_key="gruasdelsuroeste"

mysql = MySQL()
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ''
app.config['MYSQL_DATABASE_DB'] = 'gruas'
mysql.init_app(app)

@app.route('/', methods=['GET', 'POST'])
def main():
    return render_template('inicio/login.html')

@app.route("/index")
def index():
    return render_template('index.html')


"""
DESPIECES DESPIECES DESPIECES DESPIECES DESPIECES DESPIECES DESPIECES DESPIECES DESPIECES 
DESPIECES DESPIECES DESPIECES DESPIECES DESPIECES DESPIECES DESPIECES DESPIECES DESPIECES 
DESPIECES DESPIECES DESPIECES DESPIECES DESPIECES DESPIECES DESPIECES DESPIECES DESPIECES 
DESPIECES DESPIECES DESPIECES DESPIECES DESPIECES DESPIECES DESPIECES DESPIECES DESPIECES 
DESPIECES DESPIECES DESPIECES DESPIECES DESPIECES DESPIECES DESPIECES DESPIECES DESPIECES 
"""
@app.route("/despieces")
def despieces():
    sql = "SELECT * FROM despieces;"

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql)
    # Con cursor.fetchall() recupero toda la información obtenida del SELECT
    despieces = cursor.fetchall()

    print(despieces)

    conn.commit()

    return render_template('despieces/despieces.html', 
        datosRecuperados=despieces,
        title='Despieces',
        year=datetime.now().year,
        message='Listado de despieces')


@app.route('/createdespieces')
def createdespieces():
    return render_template('despieces/createdespieces.html',
        title='Despieces',
        year=datetime.now().year,
        message='Insertar despiece')

@app.route('/editdespieces/<int:idDespiece>')
def editdespieces(idDespiece):
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM despieces WHERE idDespiece = %s", (idDespiece))
    despieces = cursor.fetchall()
    conn.commit()

    return render_template('despieces/editdespieces.html', datosRecuperados = despieces,
        title='Despieces',
        year=datetime.now().year,
        message='Editar despiece')

@app.route('/updatedespieces', methods=['POST'])
def updatedespieces():
    _denominacion = request.form['txtDenominacion']
    idDespiece = request.form['txtIdDespiece']
    sql = "UPDATE despieces SET denominacion = %s WHERE idDespiece = %s;"

    datos = (_denominacion, idDespiece)

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql, datos)
    conn.commit()
   
    return redirect('despieces')

@app.route('/deletedespieces/<int:idDespiece>')
def deletedespieces(idDespiece):
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM despieces WHERE idDespiece = %s", (idDespiece))
    conn.commit()

    return redirect(url_for('despieces'))

@app.route('/storedespiece', methods=['POST'])
def storagedespiece():
    _denominacion = request.form['txtDenominacion']

    if _denominacion == '':
        flash('Recuerda cumplimentar los datos')
        return redirect(url_for('createdespieces'))

    sql = "INSERT INTO despieces (denominacion) VALUES (%s);"

    datos = (_denominacion)

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql, datos)
    conn.commit()
    return redirect(url_for('despieces'))

"""
MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS 
MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS 
MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS 
MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS 
MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS MARCAS 
"""

@app.route("/marcas")
def marcas():
    sql = "SELECT * FROM marcas_grua;"

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql)
    # Con cursor.fetchall() recupero toda la información obtenida del SELECT
    marcas = cursor.fetchall()

    print(marcas)

    conn.commit()

    return render_template('marcas/marcas.html', 
        datosRecuperados=marcas,
        title='Marcas de grúas',
        year=datetime.now().year,
        message='Listado de marcas de grúas')

@app.route('/createmarcas')
def createmarcas():
    return render_template('marcas/createmarcas.html',
        title='Marcas',
        year=datetime.now().year,
        message='Insertar marca')

@app.route('/editmarcas/<int:idMarcaGrua>')
def editmarcas(idMarcaGrua):
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM marcas_grua WHERE idMarcaGrua = %s", (idMarcaGrua))
    marcas = cursor.fetchall()
    conn.commit()

    return render_template('marcas/editmarcas.html', datosRecuperados = marcas,
        title='Marcas',
        year=datetime.now().year,
        message='Editar marca')

@app.route('/updatemarcas', methods=['POST'])
def updatemarcas():
    _marca = request.form['txtMarca']
    idMarcaGrua = request.form['txtIdMarcaGrua']
    sql = "UPDATE marcas_grua SET marca = %s WHERE idMarcaGrua = %s;"

    datos = (_marca, idMarcaGrua)

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql, datos)
    conn.commit()
   
    return redirect('marcas')

@app.route('/deletemarcas/<int:idMarcaGrua>')
def deletemarcas(idMarcaGrua):
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM marcas_grua WHERE idMarcaGrua = %s", (idMarcaGrua))
    conn.commit()

    return redirect(url_for('marcas'))

@app.route('/storemarca', methods=['POST'])
def storagemarca():
    _marca = request.form['txtMarca']

    if _marca == '':
        flash('Recuerda cumplimentar los datos')
        return redirect(url_for('createmarcas'))

    sql = "INSERT INTO marcas_grua (marca) VALUES (%s);"

    datos = (_marca)

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql, datos)
    conn.commit()
    return redirect(url_for('marcas'))


"""
CONCEPTOS NOTAS PARTES DE TRABAJO CONCEPTOS NOTAS PARTES DE TRABAJO CONCEPTOS NOTAS PARTES DE TRABAJO 
CONCEPTOS NOTAS PARTES DE TRABAJO CONCEPTOS NOTAS PARTES DE TRABAJO CONCEPTOS NOTAS PARTES DE TRABAJO 
CONCEPTOS NOTAS PARTES DE TRABAJO CONCEPTOS NOTAS PARTES DE TRABAJO CONCEPTOS NOTAS PARTES DE TRABAJO 
CONCEPTOS NOTAS PARTES DE TRABAJO CONCEPTOS NOTAS PARTES DE TRABAJO CONCEPTOS NOTAS PARTES DE TRABAJO 
CONCEPTOS NOTAS PARTES DE TRABAJO CONCEPTOS NOTAS PARTES DE TRABAJO CONCEPTOS NOTAS PARTES DE TRABAJO 
"""

@app.route("/conceptosnpt")
def conceptosnpt():
    sql = "SELECT * FROM conceptos_notas_partes_trabajo;"

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql)
    # Con cursor.fetchall() recupero toda la información obtenida del SELECT
    conceptosnpt = cursor.fetchall()

    print(conceptosnpt)

    conn.commit()

    return render_template('conceptosnpt/conceptosnpt.html', 
        datosRecuperados=conceptosnpt,
        title='Conceptos para notas de partes de trabajo',
        year=datetime.now().year,
        message='Listado de conceptos')

@app.route('/createconceptosnpt')
def createconceptosnpt():
    return render_template('conceptosnpt/createconceptosnpt.html',
        title='Conceptos para notas de partes de trabajo',
        year=datetime.now().year,
        message='Insertar concepto')

@app.route('/editconceptosnpt/<int:idConcepto>')
def editconceptosnpt(idConcepto):
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM conceptos_notas_partes_trabajo WHERE idConcepto = %s", (idConcepto))
    conceptosnpt = cursor.fetchall()
    conn.commit()

    return render_template('conceptosnpt/editconceptosnpt.html', datosRecuperados = conceptosnpt,
        title='Conceptos para notas de partes de trabajo',
        year=datetime.now().year,
        message='Editar concepto')

@app.route('/updateconceptosnpt', methods=['POST'])
def updateconceptosnpt():
    _concepto = request.form['txtConcepto']
    idConcepto = request.form['txtIdConcepto']
    sql = "UPDATE conceptos_notas_partes_trabajo SET concepto = %s WHERE idConcepto = %s;"

    datos = (_concepto, idConcepto)

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql, datos)
    conn.commit()
   
    return redirect('conceptosnpt')

@app.route('/deleteconceptosnpt/<int:idConcepto>')
def deleteconceptosnpt(idConcepto):
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM conceptos_notas_partes_trabajo WHERE idConcepto = %s", (idConcepto))
    conn.commit()

    return redirect(url_for('conceptosnpt'))

@app.route('/storeconceptosnpt', methods=['POST'])
def storeconceptosnpt():
    _concepto = request.form['txtConcepto']

    if _concepto == '':
        flash('Recuerda cumplimentar los datos')
        return redirect(url_for('createconceptosnpt'))

    sql = "INSERT INTO conceptos_notas_partes_trabajo (concepto) VALUES (%s);"

    datos = (_concepto)

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql, datos)
    conn.commit()
    return redirect(url_for('conceptosnpt'))

"""
CONCEPTOS PARTES DE TRABAJO CONCEPTOS PARTES DE TRABAJO CONCEPTOS PARTES DE TRABAJO 
CONCEPTOS PARTES DE TRABAJO CONCEPTOS PARTES DE TRABAJO CONCEPTOS PARTES DE TRABAJO
CONCEPTOS PARTES DE TRABAJO CONCEPTOS PARTES DE TRABAJO CONCEPTOS PARTES DE TRABAJO
CONCEPTOS PARTES DE TRABAJO CONCEPTOS PARTES DE TRABAJO CONCEPTOS PARTES DE TRABAJO
CONCEPTOS PARTES DE TRABAJO CONCEPTOS PARTES DE TRABAJO CONCEPTOS PARTES DE TRABAJO
"""

@app.route("/conceptospt")
def conceptospt():
    sql = "SELECT * FROM conceptos_partes_trabajo;"

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql)
    # Con cursor.fetchall() recupero toda la información obtenida del SELECT
    conceptospt = cursor.fetchall()

    print(conceptospt)

    conn.commit()

    return render_template('conceptospt/conceptospt.html', 
        datosRecuperados=conceptospt,
        title='Conceptos para partes de trabajo',
        year=datetime.now().year,
        message='Listado de conceptos')

@app.route('/createconceptospt')
def createconceptospt():
    return render_template('conceptospt/createconceptospt.html',
        title='Conceptos para partes de trabajo',
        year=datetime.now().year,
        message='Insertar concepto')

@app.route('/editconceptospt/<int:idConceptoParteTrabajo>')
def editconceptospt(idConceptoParteTrabajo):
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM conceptos_partes_trabajo WHERE idConceptoParteTrabajo = %s", (idConceptoParteTrabajo))
    conceptospt = cursor.fetchall()
    conn.commit()

    return render_template('conceptospt/editconceptospt.html', datosRecuperados = conceptospt,
        title='Conceptos para partes de trabajo',
        year=datetime.now().year,
        message='Editar concepto')

@app.route('/updateconceptospt', methods=['POST'])
def updateconceptospt():
    _concepto = request.form['txtConcepto']
    idConceptoParteTrabajo = request.form['txtIdConceptoParteTrabajo']
    sql = "UPDATE conceptos_partes_trabajo SET concepto = %s WHERE idConceptoParteTrabajo = %s;"

    datos = (_concepto, idConceptoParteTrabajo)

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql, datos)
    conn.commit()
   
    return redirect('conceptospt')

@app.route('/deleteconceptospt/<int:idConceptoParteTrabajo>')
def deleteconceptospt(idConceptoParteTrabajo):
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM conceptos_partes_trabajo WHERE idConceptoParteTrabajo = %s", (idConceptoParteTrabajo))
    conn.commit()

    return redirect(url_for('conceptospt'))

@app.route('/storeconceptospt', methods=['POST'])
def storeconceptospt():
    _concepto = request.form['txtConcepto']

    if _concepto == '':
        flash('Recuerda cumplimentar los datos')
        return redirect(url_for('createconceptospt'))

    sql = "INSERT INTO conceptos_partes_trabajo (concepto) VALUES (%s);"

    datos = (_concepto)

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql, datos)
    conn.commit()
    return redirect(url_for('conceptospt'))

"""
MODELOS DE GRÚA MODELOS DE GRÚA MODELOS DE GRÚA MODELOS DE GRÚA MODELOS DE GRÚA MODELOS DE GRÚA 
MODELOS DE GRÚA MODELOS DE GRÚA MODELOS DE GRÚA MODELOS DE GRÚA MODELOS DE GRÚA MODELOS DE GRÚA 
MODELOS DE GRÚA MODELOS DE GRÚA MODELOS DE GRÚA MODELOS DE GRÚA MODELOS DE GRÚA MODELOS DE GRÚA 
MODELOS DE GRÚA MODELOS DE GRÚA MODELOS DE GRÚA MODELOS DE GRÚA MODELOS DE GRÚA MODELOS DE GRÚA 
MODELOS DE GRÚA MODELOS DE GRÚA MODELOS DE GRÚA MODELOS DE GRÚA MODELOS DE GRÚA MODELOS DE GRÚA 
"""

@app.route("/modelos")
def modelos():
    sql = "SELECT * FROM modelos_grua INNER JOIN marcas_grua ON modelos_grua.idMarcaGrua = marcas_grua.idMarcaGrua;"

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql)
    # Con cursor.fetchall() recupero toda la información obtenida del SELECT
    modelos = cursor.fetchall()

    print(modelos)

    conn.commit()

    return render_template('modelos/modelos.html', 
        datosRecuperados=modelos,
        title='Modelos de grúas',
        year=datetime.now().year,
        message='Listado de modelos de grúas')

@app.route('/createmodelos')
def createmodelos():
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM marcas_grua")
    modelos = cursor.fetchall()
    conn.commit()

    return render_template('modelos/createmodelos.html', datosRecuperados = modelos,
        title='Modelos',
        year=datetime.now().year,
        message='Insertar modelo')

@app.route('/editmodelos/<int:idModeloGrua>')
def editmodelos(idModeloGrua):
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM modelos_grua WHERE idModeloGrua = %s", (idModeloGrua))
    modelos = cursor.fetchall()
    conn.commit()

    return render_template('modelos/editmodelos.html', datosRecuperados = modelos,
        title='Modelos',
        year=datetime.now().year,
        message='Editar modelo')

@app.route('/updatemodelos', methods=['POST'])
def updatemodelos():
    _modelo = request.form['txtModelo']
    idModeloGrua = request.form['txtIdModeloGrua']
    sql = "UPDATE modelos_grua SET modelo = %s WHERE idModeloGrua = %s;"

    datos = (_modelo, idModeloGrua)

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql, datos)
    conn.commit()
   
    return redirect('modelos')

@app.route('/deletemodelos/<int:idModeloGrua>')
def deletemodelos(idModeloGrua):
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM modelos_grua WHERE idModeloGrua = %s", (idModeloGrua))
    conn.commit()

    return redirect(url_for('modelos'))

@app.route('/storemodelo', methods=['POST'])
def storagemodelo():
    marca = request.form['selMarca']
    _modelo = request.form['txtModelo']
    _numerofabricacion = request.form['txtNumeroFabricacion']
    alcancepluma = request.form['txtAlcancePluma']
    alturabajogancho = request.form['txtAlturaBajoGancho']
    _empotrada = request.form['selEmpotrada']
    _lastrebase = request.form['selLastreBase']
    _carro = request.form['selCarro']
    _mandodistancia = request.form['selMandoDistancia']
    _botonera = request.form['selBotonera']
    _tensionalimentacion = request.form['selTensionAlimentacion']
    _base = request.form['selBase']

    if _modelo == '':
        flash('Recuerda cumplimentar los datos')
        return redirect(url_for('createmodelos'))

    sql = "INSERT INTO modelos_grua (idMarcaGrua, modelo, numeroFabricacion, alcancePluma, alturaBajoGancho, empotrada, lastreBase, carro, mandoDistancia, botonera, tensionAlimentacion, base) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s);"

    datos = (marca, _modelo, _numerofabricacion, alcancepluma, alturabajogancho, _empotrada, _lastrebase, _carro, _mandodistancia, _botonera, _tensionalimentacion, _base)

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql, datos)
    conn.commit()
    return redirect(url_for('modelos'))


"""
CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES 
CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES 
CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES 
CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES 
CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES CLIENTES 
"""

@app.route('/clientes', methods=['GET', 'POST'])
def clientes():
    sql = "SELECT * FROM clientes;"

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql)
    # Con cursor.fetchall() recupero toda la información obtenida del SELECT
    clientes = cursor.fetchall()

    print(clientes)

    conn.commit()

    return render_template('clientes/clientes.html', 
        datosRecuperados=clientes,
        title='Clientes',
        year=datetime.now().year,
        message='Listado de clientes')


@app.route('/createclientes', methods=['POST', 'GET'])
def createclientes():
    OutputArray = []
    conn = mysql.connect()
    cursor = conn.cursor()

    if request.method == 'POST':
        idProvincia = request.form['idProvincia']
        cursor.execute("SELECT * FROM municipios WHERE idProvincia = %s", [idProvincia])
        datosRecuperados = cursor.fetchall()
        conn.commit()
        
        for row in datosRecuperados:
            outputObj = {
                'idMunicipio': row['idMuncipio'],
                'nombre': row['nombre']
            }
            OutputArray.append(outputObj)
    return jsonify(OutputArray)


"""
@app.route('/createclientes')
def createclientes():
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM provincias;")
    provincias = cursor.fetchall()
    conn.commit()

    return render_template('clientes/createclientes.html', datosRecuperados = provincias,
        title='Clientes',
        year=datetime.now().year,
        message='Insertar cliente')
"""
    

@app.route('/municipio/<get_selmunicipio>')
def municipiosporprovincia(get_selmunicipio):
    print("Paso 1")
    conn = mysql.connect()
    print("Paso 2")
    cursor = conn.cursor(MySQLdb.cursors.DictCursor)
    print("Paso 3")
    cursor.execute("SELECT * FROM municipios WHERE idProvincia = %s", [get_selmunicipio])
    print("Paso 4")
    municipio = cursor.fetchall()
    print("Paso 5")
    conn.commit()
    print("Paso 6")
    municipiosArray = []

    print("Paso 7")
    for datos in municipio:
        print("Paso 8")
        municipiosObj = {
            'id': datos['idMunicipio'],
            'nombre': datos['nombre']}
        municipiosArray.append(municipiosObj)

    return jsonify({'municipioprovincia' : municipiosArray})























"""
VERIFICACIONES VERIFICACIONES VERIFICACIONES VERIFICACIONES VERIFICACIONES VERIFICACIONES VERIFICACIONES VERIFICACIONES  
VERIFICACIONES VERIFICACIONES VERIFICACIONES VERIFICACIONES VERIFICACIONES VERIFICACIONES VERIFICACIONES VERIFICACIONES 
VERIFICACIONES VERIFICACIONES VERIFICACIONES VERIFICACIONES VERIFICACIONES VERIFICACIONES VERIFICACIONES VERIFICACIONES 
VERIFICACIONES VERIFICACIONES VERIFICACIONES VERIFICACIONES VERIFICACIONES VERIFICACIONES VERIFICACIONES VERIFICACIONES 
VERIFICACIONES VERIFICACIONES VERIFICACIONES VERIFICACIONES VERIFICACIONES VERIFICACIONES VERIFICACIONES VERIFICACIONES 
"""

@app.route("/verificaciones")
def verificaciones():
    sql = "SELECT * FROM parte_verificaciones_periodicas;"

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql)
    # Con cursor.fetchall() recupero toda la información obtenida del SELECT
    verificaciones = cursor.fetchall()

    print(verificaciones)

    conn.commit()

    return render_template('verificaciones/verificaciones.html', 
        datosRecuperados=verificaciones,
        title='Verificaciones periódicas',
        year=datetime.now().year,
        message='Listado de verificaciones periódicas')

@app.route('/createverificaciones')
def createverificaciones():
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM parte_verificaciones_periodicas")
    verificaciones = cursor.fetchall()
    conn.commit()

    return render_template('verificaciones/createverificaciones.html', datosRecuperados = verificaciones,
        title='Verificaciones',
        year=datetime.now().year,
        message='Insertar verificación')

"""
@app.route('/editmodelos/<int:idModeloGrua>')
def editmodelos(idModeloGrua):
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM modelos_grua WHERE idModeloGrua = %s", (idModeloGrua))
    modelos = cursor.fetchall()
    conn.commit()

    return render_template('modelos/editmodelos.html', datosRecuperados = modelos,
        title='Modelos',
        year=datetime.now().year,
        message='Editar modelo')

@app.route('/updatemodelos', methods=['POST'])
def updatemodelos():
    _modelo = request.form['txtModelo']
    idModeloGrua = request.form['txtIdModeloGrua']
    sql = "UPDATE modelos_grua SET modelo = %s WHERE idModeloGrua = %s;"

    datos = (_modelo, idModeloGrua)

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql, datos)
    conn.commit()
   
    return redirect('modelos')

@app.route('/deletemodelos/<int:idModeloGrua>')
def deletemodelos(idModeloGrua):
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM modelos_grua WHERE idModeloGrua = %s", (idModeloGrua))
    conn.commit()

    return redirect(url_for('modelos'))

@app.route('/storemodelo', methods=['POST'])
def storagemodelo():
    marca = request.form['selMarca']
    _modelo = request.form['txtModelo']
    _numerofabricacion = request.form['txtNumeroFabricacion']
    alcancepluma = request.form['txtAlcancePluma']
    alturabajogancho = request.form['txtAlturaBajoGancho']
    _empotrada = request.form['selEmpotrada']
    _lastrebase = request.form['selLastreBase']
    _carro = request.form['selCarro']
    _mandodistancia = request.form['selMandoDistancia']
    _botonera = request.form['selBotonera']
    _tensionalimentacion = request.form['selTensionAlimentacion']
    _base = request.form['selBase']

    if _modelo == '':
        flash('Recuerda cumplimentar los datos')
        return redirect(url_for('createmodelos'))

    sql = "INSERT INTO modelos_grua (idMarcaGrua, modelo, numeroFabricacion, alcancePluma, alturaBajoGancho, empotrada, lastreBase, carro, mandoDistancia, botonera, tensionAlimentacion, base) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s);"

    datos = (marca, _modelo, _numerofabricacion, alcancepluma, alturabajogancho, _empotrada, _lastrebase, _carro, _mandodistancia, _botonera, _tensionalimentacion, _base)

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql, datos)
    conn.commit()
    return redirect(url_for('modelos'))
"""






if __name__ == '__main__':
    app.run(debug = True)