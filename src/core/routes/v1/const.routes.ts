export const ROUTE_VERSION = '/api/v1'

const SHOP : string = '/shop'
const SHOP_CREATE : string = '/create'
const SHOP_GET_ALL : string = '/get-all'
const SHOP_GET_BY_ID : string = '/get-by-id/:id'
const SHOP_DELETE : string = '/delete/:id'
const SHOP_UPDATE : string = '/update/:id'
const SHOP_UPDATE_IMAGE : string = '/update-image/:id'
const SHOP_UPDATE_FIELD : string = '/update-field/:id'

export const ROUTES_SHOP = {
    SHOP,
    SHOP_CREATE,
    SHOP_GET_ALL,
    SHOP_GET_BY_ID,
    SHOP_DELETE,
    SHOP_UPDATE,
    SHOP_UPDATE_IMAGE,
    SHOP_UPDATE_FIELD,
}


const PRODUCT : string = '/product'
const PRODUCT_CREATE : string = '/create/:shop_id'
const PRODUCT_GET_ALL : string = '/get-all/:shop_id'
const PRODUCT_GET_BY_ID : string = '/get-by-id/:id'
const PRODUCT_GET_NEXT_CODE : string = '/get-next-code/:shop_id'
const PRODUCT_DELETE : string = '/delete/:id'
const PRODUCT_UPDATE : string = '/update/:id'
const PRODUCT_UPDATE_IMAGES : string = '/update-images/:id'
const PRODUCT_UPDATE_FIELD : string = '/update-field/:id'

export const ROUTES_PRODUCT = {
    PRODUCT,
    PRODUCT_CREATE,
    PRODUCT_GET_ALL,
    PRODUCT_GET_BY_ID,
    PRODUCT_GET_NEXT_CODE,
    PRODUCT_DELETE,
    PRODUCT_UPDATE,
    PRODUCT_UPDATE_IMAGES,
    PRODUCT_UPDATE_FIELD,
}


const ORDER : string = '/order'
const ORDER_CREATE : string = '/create/:shop_id'
const ORDER_GET_ALL : string = '/get-all/:shop_id'
const ORDER_GET_BY_ID : string = '/get-by-id/:id'
const ORDER_GET_NEXT_CODE : string = '/get-next-code/:shop_id'
const ORDER_DELETE : string = '/delete/:id'
const ORDER_UPDATE : string = '/update/:id'
const ORDER_UPDATE_FIELD : string = '/update-field/:id'
const ORDER_UPDATE_PAYMENT : string = '/update-payment/:order_payment_id'

export const ROUTES_ORDER = {
    ORDER,
    ORDER_CREATE,
    ORDER_GET_ALL,
    ORDER_GET_BY_ID,
    ORDER_GET_NEXT_CODE,
    ORDER_DELETE,
    ORDER_UPDATE,
    ORDER_UPDATE_FIELD,
    ORDER_UPDATE_PAYMENT,
}


const PRODUCT_CATEGORY : string = '/product-category'
const PRODUCT_CATEGORY_CREATE : string = '/create/:shop_id'
const PRODUCT_CATEGORY_GET_ALL : string = '/get-all/:shop_id'
const PRODUCT_CATEGORY_GET_BY_ID : string = '/get-by-id/:id'
const PRODUCT_CATEGORY_DELETE : string = '/delete/:id'
const PRODUCT_CATEGORY_UPDATE : string = '/update/:id'
const PRODUCT_CATEGORY_UPDATE_FIELD : string = '/update-field/:id'

export const ROUTES_PRODUCT_CATEGORY = {
    PRODUCT_CATEGORY,
    PRODUCT_CATEGORY_CREATE,
    PRODUCT_CATEGORY_GET_ALL,
    PRODUCT_CATEGORY_GET_BY_ID,
    PRODUCT_CATEGORY_DELETE,
    PRODUCT_CATEGORY_UPDATE,
    PRODUCT_CATEGORY_UPDATE_FIELD,
}


const USER : string = '/user'
const USER_CREATE : string = '/create'
const USER_LOGIN : string = '/login'
const USER_GET_ALL : string = '/get-all'
const USER_GET_BY_ID : string = '/get-by-id/:id'
const USER_DELETE : string = '/delete/:id'
const USER_UPDATE : string = '/update/:id'
const USER_UPDATE_FIELD : string = '/update-field/:id'

export const ROUTES_USER = {
    USER,
    USER_CREATE,
    USER_LOGIN,
    USER_GET_ALL,
    USER_GET_BY_ID,
    USER_DELETE,
    USER_UPDATE,
    USER_UPDATE_FIELD,
}

const ADDRESS : string = '/address'
const ADDRESS_CREATE : string = '/create'
const ADDRESS_GET_ALL : string = '/get-all'
const ADDRESS_GET_BY_ID : string = '/get-by-id/:id'
const ADDRESS_DELETE : string = '/delete/:id'
const ADDRESS_UPDATE : string = '/update/:id'
const ADDRESS_UPDATE_FIELD : string = '/update-field/:id'

export const ROUTES_ADDRESS = {
    ADDRESS,
    ADDRESS_CREATE,
    ADDRESS_GET_ALL,
    ADDRESS_GET_BY_ID,
    ADDRESS_DELETE,
    ADDRESS_UPDATE,
    ADDRESS_UPDATE_FIELD,
}

const PAYMENT_METHOD : string = '/payment-method'
const PAYMENT_METHOD_CREATE : string = '/create'
const PAYMENT_METHOD_GET_ALL : string = '/get-all'
const PAYMENT_METHOD_GET_BY_ID : string = '/get-by-id/:id'
const PAYMENT_METHOD_DELETE : string = '/delete/:id'
const PAYMENT_METHOD_UPDATE : string = '/update/:id'
const PAYMENT_METHOD_UPDATE_FIELD : string = '/update-field/:id'

export const ROUTES_PAYMENT_METHOD = {
    PAYMENT_METHOD,
    PAYMENT_METHOD_CREATE,
    PAYMENT_METHOD_GET_ALL,
    PAYMENT_METHOD_GET_BY_ID,
    PAYMENT_METHOD_DELETE,
    PAYMENT_METHOD_UPDATE,
    PAYMENT_METHOD_UPDATE_FIELD,
}


const PAYMENT_METHOD_SHOP : string = '/payment-method-shop'
const PAYMENT_METHOD_SHOP_CREATE : string = '/create/:shop_id'
const PAYMENT_METHOD_SHOP_DELETE : string = '/delete/:shop_id/:id'
const PAYMENT_METHOD_SHOP_UPDATE : string = '/update/:id'
const PAYMENT_METHOD_SHOP_UPDATE_FIELD : string = '/update-field/:id'

export const ROUTES_PAYMENT_METHOD_SHOP = {
    PAYMENT_METHOD_SHOP,
    PAYMENT_METHOD_SHOP_CREATE,
    PAYMENT_METHOD_SHOP_DELETE,
    PAYMENT_METHOD_SHOP_UPDATE,
    PAYMENT_METHOD_SHOP_UPDATE_FIELD,
}