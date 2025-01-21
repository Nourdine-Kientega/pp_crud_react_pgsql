import Card from "../components/Card";
import Searbar from "../components/Searbar";

const HomePage = () => {
  return (
    <div className="container">
        <h1 className="text-center mt-4 mb-5">React blog app</h1>
        <Searbar />
        <div className="row gap-5 w-100">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default HomePage;