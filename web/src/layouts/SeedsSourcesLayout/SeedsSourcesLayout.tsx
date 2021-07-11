import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const SeedsSourcesLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.seedsSources()} className="rw-link">
            SeedsSources
          </Link>
        </h1>
        <Link
          to={routes.newSeedsSource()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New SeedsSource
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default SeedsSourcesLayout
