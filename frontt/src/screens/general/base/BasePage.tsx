import BaseHead from './BaseHead'

interface Params {
    title?: string
    description?: string
    children?: any
}

const defaultTitle = "Titulo por default"
const defaultDescription = "Descripción por default"
const BasePage = ({title = defaultTitle, description = defaultDescription, children}: Params) => {
  
    return (
    <>
      <BaseHead title={title} description={description}></BaseHead>
      <main >
        <div className="initial-container">
            {children}
        </div>
      </main>
    </>
  )
}

export default BasePage