

const Pagination = ({ info, consumeApi }) => {

  const actualPage = info.next ? info.next - 1 : info.pages
  const pages = pagesToMount(actualPage)

  function pagesToMount(actualPage) {
    let pages = [];

    for (let i = actualPage; (i > 0 && (i >= actualPage - 2)); i--) {
      pages.push(i)
    }
    pages = pages.reverse()

    for (let i = (actualPage + 1); (i <= info.pages && (i <= actualPage + 2)); i++) {
      pages.push(i)
    }

    if (actualPage === 1) {
      const lastIndex = pages.length - 1
      const lastKnownPage = pages[lastIndex]
      pages.push(lastKnownPage + 1, lastKnownPage + 2)
    } else if (actualPage === 2) {
      const lastIndex = pages.length - 1
      const lastKnownPage = pages[lastIndex]
      pages.push(lastKnownPage + 1)
    } else if (actualPage === info.pages) {
      const fistKnownPage = pages[0]
      pages = [fistKnownPage - 2, fistKnownPage - 1, ...pages]
    } else if (actualPage === info.pages - 1) {
      const fistKnownPage = pages[0]
      pages = [fistKnownPage - 1, ...pages]
    }

    return pages
  }

  return (
    <div className="col-8 mx-auto my-3 d-flex justify-content-center">
      <ul className="card-pages list-group list-group-horizontal">
        <li key="prev" className={`mx-2 list-group-item btn ${(info.prev === null) ? 'disabled' : ''}`} onClick={() => consumeApi(info.prev)}><i className="fas fa-angle-left"></i></li>
        {pages.map(p => <li key={p} onClick={() => consumeApi(p)} className={`btn mx-2 list-group-item ${(p === actualPage) ? 'active' : ''}`}>{p}</li>)}
        <li key="next" className={`mx-2 list-group-item btn ${(info.next === null) ? 'disabled' : ''}`} onClick={() => consumeApi(info.next)}><i className="fas fa-angle-right"></i></li>
      </ul>
    </div>
  )
}

export default Pagination