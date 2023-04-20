export const GRANT_TYPE = {
  PASSWORD: 'password',
  REFRESH_TOKEN: 'refresh_token'
}

export const TABLE_PAGE = {
  PAGE: 0,
  SIZE: 20
}

export const PASSWORD_DEFAULT = '12345678a'

export const CONTRACT_TYPE = {
  TRIAL: 'TRIAL',
  FREE: 'FREE',
  BASIC: 'BASIC',
  ADVANCE: 'ADVANCE'
}

export const LIST_CONTRACT_TYPE = [
  { value: CONTRACT_TYPE.TRIAL, name: "Trial" },
  { value: CONTRACT_TYPE.FREE, name: "Free" },
  { value: CONTRACT_TYPE.BASIC, name: "Basic" },
  { value: CONTRACT_TYPE.ADVANCE, name: "Advance" },
]

export const ACTIVITY_TYPE = {
  ACTIVITIES_LOGIN: "ACTIVITIES_LOGIN",
  ACTIVITIES_SELL: "ACTIVITIES_SELL",
  ACTIVITIES_IMPORT: "ACTIVITIES_IMPORT",
  ACTIVITIES_CHECK: "ACTIVITIES_CHECK",
  ACTIVITIES_EXPORT: "ACTIVITIES_EXPORT",
  ACTIVITIES_PRODUCT: "ACTIVITIES_PRODUCT",
  ACTIVITIES_NON_BUSINESS_PRODUCT: "ACTIVITIES_NON_BUSINESS_PRODUCT",
  ACTIVITIES_CANCEL_IMPORT: "ACTIVITIES_CANCEL_IMPORT",
  ACTIVITIES_APPROVED_IMPORT: "ACTIVITIES_APPROVED_IMPORT",
  ACTIVITIES_APPROVED_EXPORT: "ACTIVITIES_APPROVED_EXPORT",
  ACTIVITIES_CANCEL_EXPORT: "ACTIVITIES_CANCEL_EXPORT"
}

export const LIST_ACTIVITY_TYPE = [
  { value: ACTIVITY_TYPE.ACTIVITIES_LOGIN, name: "Login" },
  { value: ACTIVITY_TYPE.ACTIVITIES_SELL, name: "Invoice" },
  { value: ACTIVITY_TYPE.ACTIVITIES_PRODUCT, name: "Product" },
  { value: ACTIVITY_TYPE.ACTIVITIES_NON_BUSINESS_PRODUCT, name: "Non business product" },
  { value: ACTIVITY_TYPE.ACTIVITIES_IMPORT, name: "Import" },
  { value: ACTIVITY_TYPE.ACTIVITIES_APPROVED_IMPORT, name: "Approve import" },
  { value: ACTIVITY_TYPE.ACTIVITIES_CANCEL_IMPORT, name: "Cancel import" },
  { value: ACTIVITY_TYPE.ACTIVITIES_EXPORT, name: "Export" },
  { value: ACTIVITY_TYPE.ACTIVITIES_APPROVED_EXPORT, name: "Approve export" },
  { value: ACTIVITY_TYPE.ACTIVITIES_CANCEL_EXPORT, name: "Cancel export" },
  { value: ACTIVITY_TYPE.ACTIVITIES_CHECK, name: "Check" },
]

export const DATE_FILTER = {

}

export const DEPARTMENT = [
  { key: 0, value: "Chủ sở hữu", role: "OWNER" },
  { key: 1, value: "Quản trị", role: "ADMIN" },
  { key: 2, value: "Nhân viên", role: "MEMBER" },
  { key: 3, value: "Trưởng quầy", role: "HEAD" },
  { key: 4, value: "Kế toán", role: "ACCOUNTING" },
];

export const ROLE_CD = {
  MASTER: 'MASTER',
  OWNER: 'OWNER'
}

export const LIST_COMPANY_TYPE = [
  {
    type_code: "PHARMACY",
    type_id: 6,
    type_name: "Nhà thuốc lẻ"
  },
  {
    type_code: "CHAIN_PHARMACY",
    type_id: 7,
    type_name: "Chuỗi nhà thuốc"
  },
  {
    type_code: "PROVIDER",
    type_id: 8,
    type_name: "Nhà cung cấp"
  },
  {
    type_code: "COMPANY",
    type_id: 9,
    type_name: "Công ty dược"
  },
  {
    type_code: "CLINIC",
    type_id: 10,
    type_name: "Phòng khám"
  },

  {
    type_code: "PHARMACIST",
    type_id: 11,
    type_name: "Dược sĩ"
  },
]

export const COMPANY_TYPE = [
  { value: '', name: "Tất cả", code: 'ALL' },
  { value: 'PHARMACY', name: "Nhà thuốc lẻ", code: 'PHARMACY' },
  { value: 'CHAIN_PHARMACY', name: "Chuỗi nhà thuốc", code: 'CHAIN_PHARMACY' },
  { value: 'PROVIDER', name: "Nhà cung cấp", code: 'PROVIDER' },
  { value: 'COMPANY', name: "Công ty dược", code: 'COMPANY' },
  { value: 'CLINIC', name: "Phòng khám", code: 'CLINIC' },
  { value: 'PHARMACIST', name: "Dược sĩ", code: 'PHARMACIST' },
]

export const DATE_UTILS = {
  DATE_LOCAL: 'DD/MM/YYYY',
  YYYYMMDD: 'YYYYMMDD'
}

export const STORE_PACAKGE = {
  FREE: 1,
  BASIC: 2,
  ADVANCE: 3
}

export const LIST_PACAKGE = [
  { package_id: 1, package_name: 'Gói miễn phí', package_code: 'PHARMACY_FREE' },
  { package_id: 2, package_name: 'Gói cơ bản', package_code: 'PHARMACY_BASIC' },
  { package_id: 3, package_name: 'Gói nâng cao', package_code: 'PHARMACY_PRO' },
]

export const PACKAGE_CODE = {
  PHARMACY_FREE: "PHARMACY_FREE",
  PHARMACY_BASIC: "PHARMACY_BASIC",
  PHARMACY_PRO: "PHARMACY_PRO",
}

export const LIST_CASHFLOW_TYPE = [
  { cashflow_code: '', value: 'Tất cả' },
  { cashflow_code: 'RECEIPT', value: 'Nạp tiền' },
  { cashflow_code: 'PAYMENT', value: 'Thanh toán' },
]

export const LIST_TYPE_STATUS_TEMPLATE = [
  {code: 0, name: 'Đã hủy'},
  {code: 1, name: 'Chờ duyệt'},
  {code: 2, name: 'Đã duyệt'},
]

export const LIST_CAMPAIGN_TYPE = [
  {value: "INVOICE_SUCCESS", name: "Thông báo đơn hàng thành công"},
  {value: "LOYALTY_SUCCESS", name: "Thông báo tích điểm"},
  {value: "LOYALTY_UP_RANK", name: "Thông báo thăng hạng thẻ tích điểm"},
  {value: "PAYMENT_SUCCESS", name: "Thông báo xác nhận thanh toán"},
  {value: "ORDER_SUCCESS", name: "Thông báo xác nhận đơn hàng"},
  {value: "SHIPPING_SUCCESS", name: "Thông báo giao hàng thành công"},
  {value: "BIRTHDAY", name: "Chúc mừng sinh nhật"},
  {value: "PROACTIVE", name: "Chiến dịch chủ động"},
]

export const LIST_TEMPLATE_PARAMS_NAME = [
  {value: "invoice_code", name: "invoice_code"},
  {value: "invoice_info", name: "invoice_info"},
  {value: "drg_name", name: "drg_name"},
  {value: "customer_name", name: "customer_name"},
  {value: "date_from", name: "date_from"},
  {value: "date_to", name: "date_to"},
  {value: "date", name: "date"},
  {value: "amount", name: "amount"},
  {value: "contact", name: "contact"},
  {value: "contract_name", name: "contract_name"},
  {value: "contract_code", name: "contract_code"},
  {value: "ecoin", name: "ecoin"},
  {value: "rank", name: "rank"},
  {value: "otp_value", name: "otp_value"},
]