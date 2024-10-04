import '@adonisjs/core/services/router'
import router from '@adonisjs/core/services/router'
import { middleware } from "#start/kernel"

const UsersController = () => import('#controllers/users_controller')
const GroupController = () => import('#controllers/group_controller')

declare module '@adonisjs/core/services/router' {
  interface Route {
    tags(tags: string[]): this
  }
}

router.post('/users/login', [UsersController, 'login'])

router.group(() => {
  router.post('/create', [UsersController, 'create'])
  router.get('/list', [UsersController, 'getAll'])
  router.get('/:id', [UsersController, 'getById'])
  router.put('/:id', [UsersController, 'update'])
}).prefix('/users').use(middleware.auth())

router.group(() => {
  router.post('/create', [GroupController, 'createGroup'])
  router.get('/permissions', [GroupController, 'createPermissions'])
}).prefix('/group').use(middleware.auth())

