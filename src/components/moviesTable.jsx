import React , { Component} from 'react';
import Table from './common/table';
import Like from './common/like';

class MoviesTable extends Component {

    columns = [
        {path: "title" , lable: "Title"},
        {path: "genre.name" , lable: "Genre"},
        {path: "numberInStock" , lable: "Stock"},
        {path: "dailyRentalRate" , lable: "Rate"},
        { key: "like" , 
        content: movie => <Like liked={movie.liked} 
        onClick = { () => this.props.onLike(movie)} /> 
        },
        { key: "delete" , content: movie => <button 
        onClick={() => this.props.onDelete(movie)} 
        className="btn btn-danger btn-sm">Delete</button>
        }

    ];
   
    render() { 
        const {movies, onSort, sortColumn} = this.props;

        return ( 
           <Table 
           columns={this.columns}
           data={movies}
           onSort={onSort}
           sortColumn={sortColumn}
           /> 
        );
        
    }
}
 
export default MoviesTable;