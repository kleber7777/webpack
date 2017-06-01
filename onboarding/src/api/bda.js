const clients = [
  {
    id: 11334554,
    name: 'cliente 1',
    nickname: 'cliente 1',
    slug: 'cliente',
    aasm_state: 'enabled',
    email: 'cliente@beautydate.com',
    phone: '41996001616',
    gender: 'male',
    birthday: null,
    notes: null,
    cpf: null
  },
  {
    id: 11334555,
    name: 'cliente 2',
    nickname: 'cliente 2',
    slug: 'cliente2',
    aasm_state: 'enabled',
    email: 'cliente2@beautydate.com',
    phone: '41996001617',
    gender: 'female',
    birthday: null,
    notes: null,
    cpf: null
  }
]

const serviceCategories = [
  {
    id: 3289,
    name: 'Barba',
    service_count: 5,
    slug: 'barba',
    category_template_id: 10,
    business_id: 199,
    position: 1,
    aasm_state: 'enabled',
    created_at: '2016-02-08T11:19:33.162-02:00',
    updated_at: '2017-03-08T15:34:42.554-03:00'
  }
]

export default {
  getClients () {
    return clients
  },
  getserviceCategories () {
    return serviceCategories
  }
}
