import { Fragment } from "react/jsx-runtime";
import useBusinessData from "../../hooks/useBusinessData";
import MediaCard from "../../ui/components/Card/Card";
import Container from "../../ui/components/Container/Container";

function Home() {
  const { BusinessQuery } = useBusinessData('us');
  // console.log(BusinessQuery.articles, 'BusinessQuery');
  
  return (
    <Container>
      <h1>Bem-vindo à página inicial</h1>    
      {BusinessQuery?.articles?.map((item) => {
        return(
          <Fragment key={item?.author}>
          <MediaCard title={item?.title} description={item?.description} img={item?.urlToImage} alt={item?.author}/>
          </Fragment>
        )
      })}
     
    </Container>
  );
}

export default Home;
