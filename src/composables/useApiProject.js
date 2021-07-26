import {ref} from 'vue'
import {fetchApiProject} from '../api/apidoc';

export default function useApiProject() {
  const project = ref({})
  const projectTransform = async () => {
    const apiProject = await fetchApiProject()
    //
    //  defaults
    //
    if (!apiProject.template)
      apiProject.template = {}
    if (apiProject.template.withCompare == null)
      apiProject.template.withCompare = true
    if (apiProject.template.withGenerator == null)
      apiProject.template.withGenerator = true
    // if (apiProject.template.forceLanguage)
    //   locale.setLanguage(apiProject.template.forceLanguage);
    if (apiProject.template.aloneDisplay == null)
      apiProject.template.aloneDisplay = false

    project.value = apiProject
  }
  // const setPageTitle = async () => {
  //   console.log('set title')
  //   const title = project.title ? project.title : 'apiDoc: ' + project.name + ' - ' + project.version;
  //   document.title = title
  // }
  return {
    project,
    projectTransform
  }
}
