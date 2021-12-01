var clusterExpander = {
  positionMultipliers: [[0,0], [-.5,0], [.5,0], [-.7,-.7], [.7,-.7], [-.7,.7], [.7,.7], [-.25,-.7], [.25,-.7], [-.25,.7], , [.25,.7]],
  steps: 80,
  linearSpeed: 10,
  clusters: [],

  init: function(objects){
    var clientRect = objects[0].parentElement.getBoundingClientRect();
    clusterExpander.width = clientRect.width;
    clusterExpander.height = clientRect.height;

    for(var i = 0; i<objects.length; i++){
      var item = objects[i];
      var clusterOriginX = (clusterExpander.width/2)
      var clusterOriginY = (clusterExpander.height/2)
      var itemRect = item.getBoundingClientRect();
      var currentX = (clusterOriginX - (itemRect.width/2));
      var currentY = (clusterOriginY - (itemRect.height/2));
      var maxX = (clusterOriginX + (clusterOriginX * clusterExpander.positionMultipliers[i][0])) - (itemRect.width/2);
      var maxY = (clusterOriginY + (clusterOriginY * clusterExpander.positionMultipliers[i][1])) - (itemRect.height/2);
      item.style.left = currentX + "px";
      item.style.top = currentY + "px";

      var stepX = (maxX - currentX) / clusterExpander.steps;
      var stepY = (maxY - currentY) / clusterExpander.steps;

      var clusterData = {
        currentX: currentX,
        currentY: currentY,
        maxX: maxX,
        maxY: maxY,
        stepX: stepX,
        stepY: stepY
      };

      // clusterExpander.animateItem(item, clusterData);
      clusterExpander.clusters.push([item, clusterData]);
    }
  },

  expand: function(){
    for(var i = 0; i<clusterExpander.clusters.length; i++){
      var cluster = clusterExpander.clusters[i];
      cluster[0].style.visibility = "visible";
      clusterExpander.animateItem(cluster[0], cluster[1]);
    }
  },

  animateItem: function(item, clusterData){
    var newX = clusterData.currentX + clusterData.stepX;
    var newY = clusterData.currentY + clusterData.stepY;

    var xGoalReached = (clusterData.stepX >= 0 && newX >= clusterData.maxX) || (clusterData.stepX < 0 && newX <= clusterData.maxX);
    var yGoalReached = (clusterData.stepY >= 0 && newY >= clusterData.maxY) || (clusterData.stepY < 0 && newY <= clusterData.maxY);
    var goalReached = xGoalReached && yGoalReached;

    if(!goalReached){
      clusterData["currentX"] = newX;
      clusterData["currentY"] = newY;
      item.style.left = newX + "px";
      item.style.top = newY + "px";

      // Recursively call the animate function
      setTimeout(function () {
        clusterExpander.animateItem(item, clusterData)
      }, clusterExpander.linearSpeed);
    }
  }
};
