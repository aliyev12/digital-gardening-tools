import { Set, Router, Route, Private } from '@redwoodjs/router'
import PlantingsLayout from 'src/layouts/PlantingsLayout'
import SeedsSourcesLayout from 'src/layouts/SeedsSourcesLayout'
import PlantVarietiesLayout from 'src/layouts/PlantVarietiesLayout'
import PlantingGuidePage from './pages/PlantingGuidePage/PlantingGuidePage'
import Layout from 'src/layouts/Layout'
import UserExamplesLayout from 'src/layouts/UserExamplesLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={Layout}>
        <Private unauthenticated="home">
          <Route path="/plantings/new" page={PlantingNewPlantingPage} name="newPlanting" />
          <Route path="/plantings/{id}/edit" page={PlantingEditPlantingPage} name="editPlanting" />
          <Route path="/plantings/{id}" page={PlantingPlantingPage} name="planting" />
        </Private>
        <Route path="/plantings" page={PlantingPlantingsPage} name="plantings" />
        <Route path="/seeds-sources/new" page={SeedsSourceNewSeedsSourcePage} name="newSeedsSource" />
        <Route path="/seeds-sources/{id}/edit" page={SeedsSourceEditSeedsSourcePage} name="editSeedsSource" />
        <Route path="/seeds-sources/{id}" page={SeedsSourceSeedsSourcePage} name="seedsSource" />
        <Route path="/seeds-sources" page={SeedsSourceSeedsSourcesPage} name="seedsSources" />
        <Route path="/plant-varieties/new" page={PlantVarietyNewPlantVarietyPage} name="newPlantVariety" />
        <Route path="/plant-varieties/{id}/edit" page={PlantVarietyEditPlantVarietyPage} name="editPlantVariety" />
        <Route path="/plant-varieties/{id}" page={PlantVarietyPlantVarietyPage} name="plantVariety" />
        <Route path="/plant-varieties" page={PlantVarietyPlantVarietiesPage} name="plantVarieties" />
        <Route path="/planting-guide" page={PlantingGuidePage} name="plantingGuide" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
