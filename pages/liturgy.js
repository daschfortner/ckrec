import Page from '../components/Page';
import PageContent from '../components/PageContent';
import Cross from '../components/Cross';
import Md from '../components/Md'
import { LiturgyContent } from '../content/liturgy';

export default function Liturgy() {
  return (
    <Page title="Liturgical Worship">
      <PageContent>
        <Md>{LiturgyContent}</Md>
        <Cross />
      </PageContent>
    </Page>
  )
}