import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schema.js'
import OrderPane from './OrderPane.jsx'
export default defineConfig({name:'hanbee',title:'HANBEE · 포트폴리오 관리',projectId:'2skavp89',dataset:'production',plugins:[structureTool({structure:S=>S.list().id('portfolio-root').title('포트폴리오 관리').items([
S.documentTypeListItem('project').title('WORK · 작품'),S.documentTypeListItem('archiveItem').title('ARCHIVE · 개인 작업'),S.listItem().id('order-menu').title('목록 순서 · 끌어서 정렬').child(S.component().id('order-pane').component(OrderPane).title('작업물 순서')),S.listItem().id('site-info-menu').title('사이트 정보').child(S.document().schemaType('siteSettings').documentId('siteSettings'))])})],schema:{types:schemaTypes},document:{newDocumentOptions:prev=>prev.filter(item=>!['siteSettings','portfolioOrder'].includes(item.templateId))}})
