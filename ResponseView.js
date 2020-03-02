$(document).ready(function() {
    $(document).ajaxStart(function(){
        $("#wait").css("display", "block");
      });
      $(document).ajaxComplete(function(){
        $("#wait").css("display", "none");
      });
   
    $.ajax({ 
        type: "GET",
        dataType: "json",
        url: "https://jurongportdemo.azurewebsites.net/api/vasselinfomation/",
        success: function(data){        
            lastItem = data[data.length - 1]; 
            $("#vesselName").text(lastItem.vesselName);
            $("#voyageInOut").text(lastItem.voyageInOut);
            $("#berthNumber").text(lastItem.berthNumber);
            $("#estimateTimeOfBerting").text(lastItem.estimateTimeOfBerting);
            $("#estimateTimeOfUnberting").text(lastItem.estimateTimeOfUnberting);
            $("#vesselLoa").text(lastItem.vesselLoa);
            $("#vesselDwt").text(lastItem.vesselDwt);
            $("#vesselBertingPosition").text(lastItem.vesselBertingPosition);
            $("#lastPortOfCall").text(lastItem.lastPortOfCall);
            $("#nextPortOfCall").text(lastItem.nextPortOfCall);
            $("#pilotTimeOfApplication").text(lastItem.pilotTimeOfApplication);
            $("#pilotConfirmedServiceTime").text(lastItem.pilotConfirmedServiceTime);
            $("#pilotServiceRequestTime").text(lastItem.pilotServiceRequestTime);
            $("#agentName").text("John Sim");

            //generate consignee
            var consigneeChildren="";
            $.each(lastItem.waterBunkering, function(index, value){
                var newConsigneeItem = "<tr><td>"
                + "Tomney Chen" 
                + "</td><td>"
                + "Andrew Chen" 
                + "</td></tr>";
                consigneeChildren += newConsigneeItem;  
            });
            $("tbody#consignee").html(consigneeChildren);

            //generate stevedoreName
            var stevedoreNameChildren="";
            $.each(lastItem.waterBunkering, function(index, value){
                var newStevedoreNameItem = "<tr><td>"
                + "Kelvin Tan"
                + "</td><td>"
                + "Lay Ling"
                + "</td></tr>";
                stevedoreNameChildren += newStevedoreNameItem;  
            });
            $("tbody#stevedoreName").html(stevedoreNameChildren);

            //generate berthWHartMarkFromTo
            var berthWHartMarkFromToChildren ="";
            $.each(lastItem.waterBunkering, function(index, value){
                var newBerthWHartMarkFromToItem = "<tr><td>"
                + "297-429" 
                + "</td><td>"
                + "342-768"
                + "</td></tr>";
                berthWHartMarkFromToChildren += newBerthWHartMarkFromToItem;  
            });
            $("tbody#berthWHartMarkFromTo").html(berthWHartMarkFromToChildren);

            //generate modeOfOperation
            var modeOfOperationChildren="";
            $.each(lastItem.waterBunkering, function(index, value){
                var newModeOfOperationItem = "<tr><td>"
                + "X Mode" 
                + "</td><td>"
                + "Y Mode"
                + "</td></tr>";
                modeOfOperationChildren += newModeOfOperationItem;  
            });
            $("tbody#modeOfOperation").html(modeOfOperationChildren);
            
            //generate fuelBunkering
            var fuelBunkeringChildren="";
            $.each(lastItem.fuelBunkering, function(index, value){
                var newFuelItem = "<tr><td data-title='Barge Name'>"
                 + value.bergeName
                + "</td><td data-title='ETA'>"
                + value.eta
                + "</td><td data-title='ETU'>"
                + value.etu 
                + "</td><td data-title='Qty'>"
                 + value.quantity 
                + "</td></tr>";
                fuelBunkeringChildren += newFuelItem;  
            });
            $("tbody#fuelBunkering").html(fuelBunkeringChildren);

            //generate waterBunkering
            var waterBunkeringChildren="";
            $.each(lastItem.waterBunkering, function(index, value){
                var newWaterItem = "<tr><td data-title='ETA'>"
                + value.requiredTiming 
                + "</td><td data-title='Quantity'>" 
                + value.quantity 
                + "</td></tr>";
                waterBunkeringChildren += newWaterItem;  
            });
            $("tbody#waterBunkering").html(waterBunkeringChildren);

            // generate Pilot Timings from Anchorage to JP
            var anchorageToJpChildren="";
            $.each(lastItem.fuelBunkering, function(index, value){
                var newAnchorageToJpItem ="<tr><td data-title='Pilot Time of Application'>"
                + value.eta
                + "</td><td data-title='Pilot Service Request Time'>" 
                + value.etu
                + "</td><td data-title='Pilot Confirmed Service Time'>"
                + value.eta
                + "</td><td data-title='Boarding Ground'>"
                + "Boarding X"
                + "</td><td data-title='Tug Service provider Name'>"
                + "Tug X"
                + "</td><td data-title='Pilot Onboard Vessel at Anchorage Time'>"
                + value.eta
                +"</td></tr>";
                anchorageToJpChildren += newAnchorageToJpItem;
            });
            $("tbody#anchorageToJp").html(anchorageToJpChildren);

             // generate Pilot Timings from JP to Anchorage
             var jpToAnchorageChildren="";
             $.each(lastItem.fuelBunkering, function(index, value){
                 var newJpToAnchorageItem ="<tr><td  data-title='Pilot Time of Application'>" 
                 +  value.eta 
                 + "<td data-title='Pilot Service Request Time'>" 
                 + value.etu 
                 + "</td><td data-title='Pilot Confirmed Service Time'>"
                 + value.eta 
                 + "</td><td data-title='JP Berth Location'>" 
                 + "Penang"
                 + "</td><td data-title='Tug Service provider Name'>" 
                 + "Tug X"
                 + "</td><td data-title='Pilot Onboard Vessel at JP Time'>"
                 + value.eta 
                 + "</td></tr>";
                 jpToAnchorageChildren += newJpToAnchorageItem;
             });
             $("tbody#jpToAnchorage").html(jpToAnchorageChildren);
        },
      
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
});
