const UserPage = ({params: {id}}) => {
  return (
    <>
      <p className="text-3xl">User Page <strong>{id}</strong></p>
    </>
  )
}

export default UserPage;