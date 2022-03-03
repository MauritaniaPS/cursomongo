import { Router } from 'express'
import * as tiendaController from '../controllers/tienda.controller'
//import { authEmployeeJwt, verifyEmployee } from '../middlewares'

const router = Router();


router.get("/", tiendaController.getTienda);

/*router.get("/getRol", tiendaController.rol);

router.post("/", [verifyEmployee.checkDuplicateEmployee, authEmployeeJwt.verifyToken, authEmployeeJwt.isDueño], employeeController.createEmployee);

router.get("/:EmployeeId", [authEmployeeJwt.verifyToken, authEmployeeJwt.isDueño], employeeController.getEmployeeById);

*/
router.put("/:TiendaId", tiendaController.editTienda);

/*router.delete("/:EmployeeId", [authEmployeeJwt.verifyToken, authEmployeeJwt.isDueño], employeeController.deleteEmployeeById);

router.post("/changePassword", [authEmployeeJwt.verifyToken, authEmployeeJwt.isDueño], employeeController.changePassword);

*/
export default router;
