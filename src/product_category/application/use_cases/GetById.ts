import { ProductCategoryEntity as Entity } from '@/product_category/domain/entities'
import { ProductCategoryRepository as Repository } from '@/product_category/domain/repositories'

export class GetByIdUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(id: string): Promise<Entity | null > {
        const entity: Entity | null = await this._repository.getById(id)
        return entity
    }
}
