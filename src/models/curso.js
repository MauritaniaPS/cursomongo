import { Schema,model } from 'mongoose';

const cursoSchema = new Schema({
    profesor:{type: String, required:true},
    status:{type: Boolean, required:true},
    materia:{type: String, required:true},
    estudiantes:{type: Number, required:true},
},{
    versionKey:false//Quita el __v de la coleccion
});

export default model('curso',cursoSchema)