import { NextFunction, Request, Response } from 'express'

import { UserEntity as Entity } from '@/user/domain/entities';
import { GetByIdUseCase as UseCase } from '@/user/application/use_cases';
import { ImplementationSequelize } from '@/user/infrastructure/implementation/sequelize';

export const getByIdController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const entityId = req.params.id;

        const sequelizeRepository = new ImplementationSequelize()
        const useCase = new UseCase(sequelizeRepository)
        const entity : Entity | null = await useCase.run(entityId)

        res.status(200).json({
            status: 'success',
            code: 200,
            message: 'Registro Recuperado Correctamente',
            data: entity

        })

    } catch (error) {
        next(error)
    }
}