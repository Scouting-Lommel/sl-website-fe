import TakTitle from '../../components/organisms/TakTitle';
import InfoText from '../../components/organisms/InfoText';
import InfoTextReversed from '../../components/organisms/InfoTextReversed';
import Activities from '../../components/organisms/Activities';
import Leaders from '../../components/organisms/Leaders';
import Files from '../../components/organisms/Files';

export default function TakPage({fin}){
    return (
        <div>
            <TakTitle takname={fin.groups.data[0].attributes.name}/>
            <InfoText title={fin.groups.data[0].attributes.Title1} text={fin.groups.data[0].attributes.Text1} image={fin.groups.data[0].attributes.Image1.data.attributes.url} />
            <Activities activities={fin.activities.data} groupName={fin.groups.data[0].attributes.name} />
            <Leaders leaders={fin.leaders.data} />
            <InfoTextReversed title={fin.groups.data[0].attributes.Title2} text={fin.groups.data[0].attributes.Text2} image={fin.groups.data[0].attributes.Image2.data.attributes.url}  />
            <Files files={fin.groups.data[0].attributes.Files.data} groupName={fin.groups.data[0].attributes.name}/>
        </div>
    )
}