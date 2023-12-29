import { Request, Response } from 'express';

export const handleMercadoPagoWebhook = (req: Request, res: Response) => {
  // Lógica para lidar com o webhook do MercadoPago
  // Por exemplo, processar os dados recebidos, atualizar informações no sistema, etc.
  console.log('Requisição recebida no webhook do MercadoPago:', req.body);
  res.status(200).send('Requisição recebida pelo webhook do MercadoPago');
};
