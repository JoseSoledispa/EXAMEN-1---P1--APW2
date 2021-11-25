const mongoose = requiere('mongoose');

const { Usuarios } = require('./modeloUser')
const { Publicaciones } = require('./modeloPublicaciones')

const BD_URI = 'mongodb://localhost:27017/app_matricula'
mongoose.connect('mongodb://localhost')

//conexion
mongoose.connect(DB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }, (err) => {
        if (err) {
            console.log('********* ERROR DE CONEXIÓN *******');
        } else {
            console.log('********* CONEXIÓN CORRECTA *******');
        }
    });


    //modelos
    const UsuariosSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            requiere:true
        },
        curso:{
            type:String
        },
        matricula:{
            type:String,
        },
    },
    {
        timestamps:true
    }
    )
    const PublicacionesSchema = new mongoose.Schema(
        {
            title:{
                type:String
            },
            description:{
                type:String
            },
            author:{
                type:mongoose.Types.ObjectId
            },
        },
        {
            timestamps:true
        }
    )









    const crearCategoria = () => {
        Categories.create(
            {
                name: 'Salud'
            }
        )
    }
    
    const crearEstudiante = () => {
        Usuarios.create(
            {
                name: 'Luis (edition)',
                email: 'luis@demo.com',
                numberPhone: '0978881735',
                tag: ['edition']
            }
        )
    }
    const crearMatricula = () => {
        Usuarios.create(
            {
                name: 'Luis (edition)',
                email: 'luis@demo.com',
                numberPhone: '0978881735',
                tag: ['edition']
            }
        )
    }
    const crearCurso = () => {
        Usuarios.create(
            {
                name: 'Luis (edition)',
                email: 'luis@demo.com',
                numberPhone: '0978881735',
                tag: ['edition']
            }
        )
    }
    const HoraSincornica = () => {
        Usuarios.create(
            {
                name: 'Luis (edition)',
                email: 'luis@demo.com',
                numberPhone: '0978881735',
                tag: ['edition']
            }
        )
    }
    const HoraAsincronica = () => {
        Usuarios.create(
            {
                name: 'Luis (edition)',
                email: 'luis@demo.com',
                numberPhone: '0978881735',
                tag: ['edition']
            }
        )
    }
    const Creditos = () => {
        Usuarios.create(
            {
                name: 'Luis (edition)',
                email: 'luis@demo.com',
                numberPhone: '0978881735',
                tag: ['edition']
            }
        )
    }
    const Tiposdeerror = () => {
        Usuarios.create(
            {
                name: 'Luis (edition)',
                email: 'luis@demo.com',
                numberPhone: '0978881735',
                tag: ['edition']
            }
        )
    }