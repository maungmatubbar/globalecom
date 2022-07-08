@extends('layouts.front_layout.front_layout')
@section('content')
	<div class="container">	
		<div class="row">
			<div class="span4">
                <h4>Contact Details</h4>
                <strong>Begum Rokeya Sarani, Dhaka -1207, Bangladesh.</strong>
                <p><strong>Telephone:</strong> 9014725, 8031031, 8060116,</p>
                <p><strong>Mobilie:</strong> +8801757074304, +8801757074302,</p>
                <p><strong>Email:</strong> eshopbd@shop.com</p>
                <hr/>
                <h4>Opening Hours</h4>
				<h5> Monday - Friday</h5>
				<p>09:00am - 09:00pm<br/><br/></p>
				<h5>Saturday</h5>
				<p>09:00am - 07:00pm<br/><br/></p>
				<h5>Sunday</h5>
				<p>12:30pm - 06:00pm<br/><br/></p>
			</div>
			<div class="span4">
                <h4>Email Us</h4>
                @if(Session::has('success_message'))
                    <div class="alert alert-success">
                    {{ Session::get('success_message') }}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                @endif 
                @if($errors->any())
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif
                <form class="form-horizontal" action="{{ url('/contact') }}" method="post">@csrf
                    <fieldset>
                        <div class="control-group">
                            <input name="name" type="text" placeholder="name" class="input-xlarge"/>

                        </div>
                        <div class="control-group">
                        
                            <input type="email" name="email" placeholder="email" class="input-xlarge"/>
                        
                        </div>
                        <div class="control-group">
                        
                            <input type="text" name="subject" placeholder="subject" class="input-xlarge"/>
                        
                        </div>
                        <div class="control-group">
                            <textarea name="message" rows="3" id="textarea" class="input-xlarge"></textarea>
                        
                        </div>
                            <button class="btn btn-medium btn-info" type="submit">Send Message</button>

                    </fieldset>
                 </form>
			</div>
		</div>
	</div>
@endsection