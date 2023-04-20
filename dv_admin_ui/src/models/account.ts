export type AccountSearch = {
    drg_store_id: number
}
export type AccountDelete = {
    account_id: number,
    status?: number ,
    active_flg: number,
}

export type DrgAccount = {
    account_id: number,
    company_id: number,
    drg_store_id: number,
    login_id: string,
    user_name: string | null,
    phone_no: string,
    role_cd: string,
    email: string,
    status: number,
    full_name: string,
    avatar_url: string | null,
    group_cd: string | null,
    facebook_id: string | null,
    created_date: string,
    updated_date: string,
    active_flg: number,
    updated_user: string, 
    user_role_entities: RolesItem[]
}

export type RolesItem = {
    role_id: number
    company_id: number
    drg_store_id: number
    role_cd: string
    role_name: string
    created_date: string
    updated_date: string
    description: string
    updated_user: string | null
    active_flg: number
    user_permission_entities: DrgPermission[]
}

export type DrgPermission = {
    permission_id: number,
    permission_name: string,
    module_name: string,
    short_title: string,
    description: string,
    url: string
}

export type CreateStoreType = {
    store_name: string,
    phone_no: string,
    password: string,
    email: string,
    city: string,
    district: string,
    company_name: string,
    company_type: string,
    address: string,
    source: string,
}