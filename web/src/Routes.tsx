import { Set, Router, Route } from '@redwoodjs/router'
import PlantingGuidePage from './pages/PlantingGuidePage/PlantingGuidePage'
import Layout from 'src/layouts/Layout'
import UserExamplesLayout from 'src/layouts/UserExamplesLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/home" page={HomePage} name="home" />
      <Set wrap={UserExamplesLayout}>
        <Route path="/user-examples/new" page={UserExampleNewUserExamplePage} name="newUserExample" />
        <Route path="/user-examples/{id:Int}/edit" page={UserExampleEditUserExamplePage} name="editUserExample" />
        <Route path="/user-examples/{id:Int}" page={UserExampleUserExamplePage} name="userExample" />
        <Route path="/user-examples" page={UserExampleUserExamplesPage} name="userExamples" />
      </Set>
      <Set wrap={Layout}>
        <Route path="/planting-guide" page={PlantingGuidePage} name="plantingGuide" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
