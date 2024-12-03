import UserStatisticTable from "./charts/UserStatisticTable"

function DashboardProject(){
    const data=[
    {
        imageUrl:"/img/icons/flag-iran.png",
        ip:"5.220.113.24",
        request:"13490",
        status:"90",
        category:["Ubuntu","Kali"]
    },
    {
      imageUrl:"/img/icons/flag-mexico.png",
      ip:"185.20.53.101",
      request:"7265",
      status:"80",
      category:["Windows","CentOS"]
  },
  {
    imageUrl:"/img/icons/flag-iran.png",
    ip:"31.7.75.172",
    request:"6265",
    status:"100",
    category:["Winserver"]
  },
  {
    imageUrl:"/img/icons/flag-canada.png",
    ip:"178.33.91.107",
    request:"4265",
    status:"60",
    category:["Kali"]
  },
  {
    imageUrl:"/img/icons/flag-iran.png",
    ip:"31.7.75.175",
    request:"3265",
    status:"95",
    category:["Windows","Android"]
  },
  {
    imageUrl:"/img/icons/flag-iran.png",
    ip:"31.7.75.170",
    request:"2265",
    status:"90",
    category:["Windows"]
  },
    ]
    return(
        <div class="col-lg-8 col-md-6 mb-md-0 mb-4">
          <div class="card">
            <div class="card-header pb-0">
              <div class="row">
                <div class="col-lg-6 col-7">
                  <h6>Users</h6>
                  <p class="text-sm mb-0">
                    <i class="fa fa-check text-info" aria-hidden="true"></i>
                    <span class="font-weight-bold ms-1">30 unique</span> this month
                  </p>
                </div>
                <div class="col-lg-6 col-5 my-auto text-end">
                  <div class="dropdown float-lg-end pe-4">
                    <a class="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fa fa-ellipsis-v text-secondary"></i>
                    </a>
                    <ul class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable">
                      <li><a class="dropdown-item border-radius-md" href="javascript:;">Action</a></li>
                      <li><a class="dropdown-item border-radius-md" href="javascript:;">Another action</a></li>
                      <li><a class="dropdown-item border-radius-md" href="javascript:;">Something else here</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body px-0 pb-2">
              <div class="table-responsive">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">IP</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Category</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Request</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data&&data.map((userInfo,i)=>(
                      <UserStatisticTable userData={userInfo} key={i}/>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    )
}
export default DashboardProject