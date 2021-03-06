@extends('layouts.admin_layout.admin_layout')
@section('content')
<?php
  $week = array();
  $count=0;
  while($count<=6)
  {
      $week[] = date('D',strtotime('-'.$count.'day'));
      $count++;
  }
$dataPoints = array(
  array("y" => $countDaysVisitors[6], "label" =>$week[6]),
  array("y" => $countDaysVisitors[5], "label" =>$week[5]),
  array("y" => $countDaysVisitors[4], "label" =>$week[4]),
  array("y" => $countDaysVisitors[3], "label" =>$week[3]),
  array("y" => $countDaysVisitors[2], "label" =>$week[2]),
  array("y" => $countDaysVisitors[1], "label" =>$week[1]),
	array("y" => $countDaysVisitors[0], "label" =>$week[0]),
);
$dataPieChart = array(
	array("label"=> "Total Orders", "y"=> $orderCount),
	array("label"=> "Register Users", "y"=> $usersCount),
	array("label"=> "Total Visitors", "y"=> $visitorsCount),
	
);

 
?>
<script>
  window.onload = function () {
   
  var chart = new CanvasJS.Chart("chartContainer", {
    title: {
      text: "Visitors Over a Week"
    },
    axisY: {
      title: "Number of Visitors"
    },
    data: [{
      type: "line",
      dataPoints: <?php echo json_encode($dataPoints, JSON_NUMERIC_CHECK); ?>
    }]
  });
  chart.render();
  var chart = new CanvasJS.Chart("pieChart", {
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Average Orders,Register Users & Visitors"
      },
      subtitles: [{
        text: ""
      }],
      data: [{
        type: "pie",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - #percent%",
        yValueFormatString: "฿#,##0",
        dataPoints: <?php echo json_encode($dataPieChart, JSON_NUMERIC_CHECK); ?>
      }]
    });
  chart.render();
   
  }
</script>
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Dashboard</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Dashboard</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <!-- Small boxes (Stat box) -->
        @if(Session::has('error_message'))
          <p class="alert alert-danger alert-dismissible fade show" role="alert">
            {{ Session::get('error_message') }}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
          </p>
        @endif
        <div class="row">
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-info">
              <div class="inner">
                <h3>{{ $orderCount }}</h3>

                <p>New Orders</p>
              </div>
              <div class="icon">
                <i class="ion ion-bag"></i>
              </div>
              <a href="{{ url('/admin/orders') }}" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-success">
              <div class="inner">
                <h3>53<sup style="font-size: 20px">%</sup></h3>

                <p>Bounce Rate</p>
              </div>
              <div class="icon">
                <i class="ion ion-stats-bars"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-warning">
              <div class="inner">
                <h3>{{ $usersCount }}</h3>

                <p>User Registrations</p>
              </div>
              <div class="icon">
                <i class="ion ion-person-add"></i>
              </div>
              <a href="{{ url('/admin/users') }}" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-danger">
              <div class="inner">
                <h3>{{ $visitorsCount }}</h3>

                <p>Unique Visitors</p>
              </div>
              <div class="icon">
                <i class="ion ion-pie-graph"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
        </div>
        <div class="row mb-5">
          <div id="chartContainer" style="height: 370px; width: 100%;"></div>
        </div>
        <div class="row mb-5">
          <div id="pieChart" style="height: 370px; width: 100%;"></div>
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  @endsection