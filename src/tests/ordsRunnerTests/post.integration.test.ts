import { DateTime } from 'luxon'

import OrdsRunner from '../../lib/ordsRunner'
import { IPod } from './get.integration.test'

describe('ordsRunner POST integration tests', function () {
  this.timeout(60000)
  let runner: OrdsRunner<IPod>

  before(() => { runner = new OrdsRunner<IPod>('https://g6b2527b56da518-convertfinitedev.adb.us-ashburn-1.oraclecloudapps.com/ords/admin') })

  it('should add a pod', async () => {
    const newPod: IPod = {
      pod_id: 0,
      pod_name: DateTime.now().toMillis(),
      pod_svc_user: DateTime.now().toMillis(),
      pod_svc_user_pass: DateTime.now().toMillis(),
      pod_url: `https://${DateTime.now().toMillis()}.com`
    }
  })
})
