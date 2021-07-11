import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const PlantVarietiesLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.plantVarieties()} className="rw-link">
            PlantVarieties
          </Link>
        </h1>
        <Link
          to={routes.newPlantVariety()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New PlantVariety
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default PlantVarietiesLayout
