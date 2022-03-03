import Curso from "../models/curso";

export const getCurso = async (req, res) => {
    const curso = await Curso.find();
    res.status(200).json(curso);
}
export const editCurso = async (req, res)=>{
    const curso= await Curso.findById(req.parms.CursoId, req.body, {new: true});
    console.log(curso)
    res.status(200).json(curso);
}

export const addCurso = async (req, res)=>{
    const {
        profesor,
        status,
        materia,
        estudiantes,
    } = req.body;
    const newCurso = new Curso({
        profesor,
        status,
        materia,
        estudiantes,
    })
    
    await newCurso.save();


    res.status(200).json({ messages: "Curso guardado." })
}
export const deleteCurso = async (req, res)=>{
        let fullName = await helpers.tokenCurso(req.headers['x-access-token']);
        let toDay = momentTz().tz('America/Mexico_City');
        const history = new History({
            guest: fullName,
            did: "Curso eliminado.",
            dateModifi: toDay
        })
    }