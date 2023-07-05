import React, { useState } from "react";
import { Card, Button, CardTitle, Table, Label, Input } from "reactstrap";

const contohData = [
  {
    id: 1,
    title: 'Hiking ke Pangrango'
  },
  {
    id: 2,
    title: 'Jalan-jalan ke Pangandaran'
  }
]

function ArticleListPage() {
  // data
  const [article, setArticle] = useState({ data: [...contohData] });
  // filter
  const [filterName, setFilterName] = useState("")

  // handle change
  function handleChange(event) {
    setFilterName(event.target.value);
  }

  // handle filter
  function handleFilter() {
    const newList = article.data.filter(function(value) {
      return value.title === filterName
    });
    
    if(filterName !== "") {
      setArticle({ data: newList });
    } else {
      setArticle({ data: [...contohData] })
    }
  }

  return (
    <div>
      <Card className='m-3 p-3' outline color="secondary">
        <CardTitle tag="h3">Article List</CardTitle>
        <hr />
        <div>
          <Label for="article-filter">Article Name:</Label>
          <div className="d-flex justify-content-center">
            <Input 
              type="text" 
              id="article-filter"
              onChange={handleChange}
              value={filterName}
              placeholder="Please Input Article Name..." 
            />
            <Button 
              className='ml-3' 
              color="primary"
              onClick={handleFilter}
            >
              Search
            </Button>
          </div>
        </div>
      </Card>
      <Card className='m-3 p-3' outline color="secondary">
      <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Article Name</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {article.data.map(function(data) {
              return (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.title}</td>
                  <td><Button color="primary">Detail</Button></td>
                  <td><Button color="info">Update</Button></td>
                  <td><Button color="danger">Hapus</Button></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        <Button>Button</Button>
      </Card>
    </div>
  )
}

export default ArticleListPage;