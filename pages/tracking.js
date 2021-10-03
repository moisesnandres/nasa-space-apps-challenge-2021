import Head from 'next/head'
import Calendar from '../components/Calendar'
import Search from '../components/Search'
import Zoom from '../components/Zoom'
import RangeInput from '../components/RangeInput'

export default function Home() {
  return (
    <>
      <Head>
        <title>Track the plastic</title>
        <meta name="description" content="Leveraging AI/ML for plastic marine debris" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="map-container">
        <div className="dropdowns wrapper">
          <div className="country-search">
            <Search />
          </div>
          <div className="date-search">
            <Calendar />
          </div>
        </div>
        <RangeInput />
        <Zoom />
      </div>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.watsonAssistantChatOptions = {
            integrationID: "2744d68e-84cf-471c-be6f-91317737d721", // The ID of this integration.
            region: "us-south", // The region your integration is hosted in.
            serviceInstanceID: "0d736a72-8196-427b-b678-2c723d72cdfa", // The ID of your service instance.
            onLoad: function(instance) { instance.render(); }
          };
        setTimeout(function(){
          const t=document.createElement('script');
          t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
            (window.watsonAssistantChatOptions.clientVersion || 'latest') +
            "/WatsonAssistantChatEntry.js"
          document.head.appendChild(t);
        });
        `
      }}/>
    </>
  )
}
