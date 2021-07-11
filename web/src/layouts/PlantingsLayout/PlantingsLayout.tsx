import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const PlantingsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.plantings()} className="rw-link">
            Plantings
          </Link>
        </h1>
        <Link to={routes.newPlanting()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Planting
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default PlantingsLayout
