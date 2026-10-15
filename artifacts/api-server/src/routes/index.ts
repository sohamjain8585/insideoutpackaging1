import { Router, type IRouter } from "express";
import healthRouter from "./health";
import inquiriesRouter from "./inquiries";
import pdfDownloadsRouter from "./pdf-downloads";

const router: IRouter = Router();

router.use(healthRouter);
router.use(inquiriesRouter);
router.use(pdfDownloadsRouter);

export default router;
