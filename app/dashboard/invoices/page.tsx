const falseFetch = async () => {
  console.log('Fetching Invoices')
  await new Promise((resolve)=>{
    setTimeout(resolve,2000)
  })
}

export default async function Page() {
  await falseFetch()
  return <p>Invoices Page</p>;
}
