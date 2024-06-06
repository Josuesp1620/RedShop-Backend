import { Router } from 'express'
import { ROUTE_VERSION } from './const.routes'
import { LoggerMiddleware } from '@/shared/middleware/LoggerMiddleware'
import ShopRoutes from '@/shop/infrastructure/driving-adapter/api-rest/routes'
import ProductRoutes from '@/product/infrastructure/driving-adapter/api-rest/routes'
import ProductCategoryRoutes from '@/product_category/infrastructure/driving-adapter/api-rest/routes'

import UserRoutes from '@/user/infrastructure/driving-adapter/api-rest/routes'
import FileRoutes from '@/file_uploader/infrastructure/driving-adapter/api-rest/routes'

const loggerMiddleware = new LoggerMiddleware()
const route = Router() 

route.use(ROUTE_VERSION, loggerMiddleware.logRequestInfo, ShopRoutes)
route.use(ROUTE_VERSION, loggerMiddleware.logRequestInfo, ProductRoutes)
route.use(ROUTE_VERSION, loggerMiddleware.logRequestInfo, ProductCategoryRoutes)
route.use(ROUTE_VERSION, loggerMiddleware.logRequestInfo, UserRoutes)
route.use(ROUTE_VERSION, loggerMiddleware.logRequestInfo, FileRoutes)

export default route
