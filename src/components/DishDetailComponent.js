import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';
import {Loading} from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

class DishDetail extends Component{

    constructor(props) {
        super(props);
        this.state = {
            dishDetails: this.props.dish
        };
    }

    renderDish(dish) {

        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                     <FadeTransform in transformProps={{
                                    exitTransform: 'scale(0.5) translateY(-50%)'
                     }}>
                    <Card>
                        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name}</CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                    </FadeTransform>
                </div>   
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

   

    renderComments(comments, postComment, dishId){
        if (comments == null) {
            return (<div></div>)
        }
        const cmnts = comments.map(comment => {
            return (
                <Fade in>
                    <li key={comment.id}>         
                        <p>{comment.comment}</p>
                        <p>-- {comment.author},
                        &nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                        </p>
                    </li>
                </Fade>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <Stagger in>
                    <ul className='list-unstyled'>
                        {cmnts}
                    </ul>
                </Stagger>
                <CommentForm dishId={dishId} postComment={postComment}/>
            </div>
        )
    }


    render(){
        if(this.props.isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading/>
                    </div>
                </div>
            );
        }
        else if(this.props.errMess){
            return(
                <div className="container">
                    <div className="row">
                        <h4>{this.props.errMess}</h4>
                    </div>
                </div>
            );
        }

        const dish = this.props.dish
        
        if (dish == null) {
            return (<div></div>);
        }

        const dishItem = this.renderDish(dish);
        const dishComment = this.renderComments(this.props.comments, this.props.postComment, this.props.dish.id);

        return (
        <div className="container">   
            <div className="row"> 
                <Breadcrumb>
                  <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                  <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                </div> 
            </div>
            <div className="row">
                {dishItem}
                {dishComment}
            </div>
            
         </div>
        )
    }

}

export default DishDetail;