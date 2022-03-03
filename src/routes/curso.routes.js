import { Router } from 'express'
import * as cursoController from '../controllers/curso.controller'
import { authEmployeeJwt, verifyEmployee } from '../middlewares'

const router = Router();


router.get("/", [authEmployeeJwt.verifyToken, authEmployeeJwt.isDueño], cursoController.getCurso);


router.put("/:CursoId", cursoController.editCurso);
router.post("/", cursoController.addCurso);
router.delete("/:CursoId", cursoController.deleteCurso);


export default router;
