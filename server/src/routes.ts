import express from 'express';
import { NodemailerMailAdapter } from './adapters/noedmailer/noedmailer-mail-adapter';
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router();


routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    new PrismaFeedbackRepository(),
    new NodemailerMailAdapter()
  )

  await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot
    });

  return res.status(201).send();
  // json({ data: feedback});
})