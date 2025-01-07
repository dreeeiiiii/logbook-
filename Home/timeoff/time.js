am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv");
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    var data = [
        {
          name: "Janwell",
          steps: 45688,
          pictureSettings: {
            src:"https://scontent.fmnl40-1.fna.fbcdn.net/v/t1.6435-9/134738648_1299541847076839_1450577672737588683_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGwDJkQFvE-ZIG9iLv_p5L2orTUIN9UwzOitNQg31TDMzQ0MagcCfF7P8VfsS-0YEa15l9DTigGlVSJWBClRMcm&_nc_ohc=NszMV7XkLtMQ7kNvgG7HtbX&_nc_zt=23&_nc_ht=scontent.fmnl40-1.fna&_nc_gid=AAoLTRyQlrJW2VRVPXd-NAJ&oh=00_AYDLTturPVIDPwrW8vqY2q6Ozj6Yz0BCrtzQAGq1oS0K0Q&oe=67A4180C"
          }
        },
        {
          name: "Andrei",
          steps: 35781,
          pictureSettings: {
            src: "https://scontent.fmnl40-1.fna.fbcdn.net/v/t39.30808-6/469175507_1598890770715624_7449004332425267353_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGxphvpOfpD_y5kE7DlI_Kak1trc2UCAESTW2tzZQIARHGE3Ih2KSfE40WkUCrYV1Uuk5iMA8YEwKe9DDAjoSup&_nc_ohc=aBr9-GL-QHAQ7kNvgHhowev&_nc_zt=23&_nc_ht=scontent.fmnl40-1.fna&_nc_gid=A-xSNHoIhSHY80lSM1CODMb&oh=00_AYBH_KqPfBAd1SNgq2sBm4u1z9VSltTyuHcnr97sQGUNuA&oe=67827340"
          }
        },
        {
            name: "Loise",
            steps: 25464,
            pictureSettings: {
              src:"https://scontent.fmnl40-2.fna.fbcdn.net/v/t39.30808-6/470176831_1555658338464905_7271374077392191417_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFCyOJ4khjQTb3ILEn2AGyYaz1CS2ZEPLFrPUJLZkQ8saro5UE_iiRaGZ0Wkm2VJcp32lx1f-hBDRZCyPQ6DYsv&_nc_ohc=4qeoFcQWv6AQ7kNvgEIZykW&_nc_zt=23&_nc_ht=scontent.fmnl40-2.fna&_nc_gid=A_IUJI7wnS62SjNQ7OAo6fQ&oh=00_AYAAqxLnHqjETFRoxdHoC1r5ivyZeTudG0TkYS9SvYUSzg&oe=67829CAF"
            }
          },
          {
            name: "Christian",
            steps: 18788,
            pictureSettings: {
              src: "https://scontent.fmnl40-2.fna.fbcdn.net/v/t39.30808-6/440202369_2378207802568631_1012635653324699436_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHiSL00KNM6kJXZn6eBzPOrOr4L3qtGSg46vgveq0ZKDjiqoDR3cQsNe6EOmMotkgcFiMllIrp8t54oLpKZrJkX&_nc_ohc=PHbxomx_QgsQ7kNvgEJlVvl&_nc_zt=23&_nc_ht=scontent.fmnl40-2.fna&_nc_gid=AwVn7EKgOZ8bHjRTnvjT5Xr&oh=00_AYBuu_KOWYBTNKEaOywgiwuwIZmDzMJq8ICQQjWJlID28w&oe=678285C4"
            }
          },
          {
            name: "Sam",
            steps: 15465,
            pictureSettings: {  
              src: "https://scontent.fmnl40-1.fna.fbcdn.net/v/t39.30808-6/455455131_8352176784821964_4320522794361282991_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHxiA0DBSpc0sKSNkAA1oKtUMvnrE8YA6NQy-esTxgDo9UrS0PQcq5OgZLDQHsXdAJLj7MiLMQdwov8ws3NavPp&_nc_ohc=slKR2H2nNZYQ7kNvgG9WoGX&_nc_zt=23&_nc_ht=scontent.fmnl40-1.fna&_nc_gid=AJRYcHeHMjqfqk6GtbY72uI&oh=00_AYCSSyLcCiOz3j0ZwfjFDNfO4VrmaY_RG4h8ckInv90pKw&oe=67828C96"
              }
          },
          {
            name: "Mark",
            steps: 11561,
            pictureSettings: {
              src:"https://scontent.fmnl40-2.fna.fbcdn.net/v/t39.30808-6/441413486_1588346692004514_606705191612764740_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEAGKgvZ1q3QPuRbcVYI6z2qYC6lsSuU0ipgLqWxK5TSPxmm-eEjFby9om60D80eUYcCr5EMQBQS_DxHFDaLN4n&_nc_ohc=M5XFrJuOKvcQ7kNvgEWkbpi&_nc_zt=23&_nc_ht=scontent.fmnl40-2.fna&_nc_gid=Au-ybmVyV9OoI3uSmm3GQAf&oh=00_AYBFKT5_xqju0czN8PSmXWJfO-C-jvxnDX70bIsXjnTU_w&oe=67827361"
            }
          }
        ];

        var chart = root.container.children.push(
            am5xy.XYChart.new(root, {
              panX: false,
              panY: false,
              paddingLeft:0,
              paddingRight:30,
              wheelX: "none",
              wheelY: "none"
            })
          );
          var yRenderer = am5xy.AxisRendererY.new(root, {
            minorGridEnabled:true
          });
          yRenderer.grid.template.set("visible", false);
          
          var yAxis = chart.yAxes.push(
            am5xy.CategoryAxis.new(root, {
              categoryField: "name",
              renderer: yRenderer,
              paddingRight:40
            })
          );
          var xRenderer = am5xy.AxisRendererX.new(root, {
            minGridDistance:80,
            minorGridEnabled:true
          });
          
          var xAxis = chart.xAxes.push(
            am5xy.ValueAxis.new(root, {
              min: 0,
              renderer: xRenderer
            })
          );
          var series = chart.series.push(
            am5xy.ColumnSeries.new(root, {
              name: "Income",
              xAxis: xAxis,
              yAxis: yAxis,
              valueXField: "steps",
              categoryYField: "name",
              sequencedInterpolation: true,
              calculateAggregates: true,
              maskBullets: false,
              tooltip: am5.Tooltip.new(root, {
                dy: -30,
                pointerOrientation: "vertical",
                labelText: "{valueX}"
              })
            })
        );
        
        series.columns.template.setAll({
          strokeOpacity: 0,
          cornerRadiusBR: 10,
          cornerRadiusTR: 10,
          cornerRadiusBL: 10,
          cornerRadiusTL: 10,
          maxHeight: 50,
          fillOpacity: 0.8
        });
        
        var currentlyHovered;

series.columns.template.events.on("pointerover", function(e) {
  handleHover(e.target.dataItem);
});

series.columns.template.events.on("pointerout", function(e) {
  handleOut();
});

function handleHover(dataItem) {
  if (dataItem && currentlyHovered != dataItem) {
    handleOut();
    currentlyHovered = dataItem;
    var bullet = dataItem.bullets[0];
    bullet.animate({
      key: "locationX",
      to: 1,
      duration: 600,
      easing: am5.ease.out(am5.ease.cubic)
    });
  }
}

function handleOut() {
  if (currentlyHovered) {
    var bullet = currentlyHovered.bullets[0];
    bullet.animate({
      key: "locationX",
      to: 0,
      duration: 600,
      easing: am5.ease.out(am5.ease.cubic)
    });
  }
}


var circleTemplate = am5.Template.new({});

series.bullets.push(function(root, series, dataItem) {
  var bulletContainer = am5.Container.new(root, {});
  var circle = bulletContainer.children.push(
    am5.Circle.new(
      root,
      {
        radius: 34
      },
      circleTemplate
    )
  );

  var maskCircle = bulletContainer.children.push(
    am5.Circle.new(root, { radius: 27 })
  );

  // only containers can be masked, so we add image to another container
  var imageContainer = bulletContainer.children.push(
    am5.Container.new(root, {
      mask: maskCircle
    })
  );

  // not working
  var image = imageContainer.children.push(
    am5.Picture.new(root, {
      templateField: "pictureSettings",
      centerX: am5.p50,
      centerY: am5.p50,
      width: 60,
      height: 60
    })
  );

  return am5.Bullet.new(root, {
    locationX: 0,
    sprite: bulletContainer
  });
});
series.set("heatRules", [
    {
      dataField: "valueX",
      min: am5.color(0xe5dc36),
      max: am5.color(0x5faa46),
      target: series.columns.template,
      key: "fill"
    },
    {
      dataField: "valueX",
      min: am5.color(0xe5dc36),
      max: am5.color(0x5faa46),
      target: circleTemplate,
      key: "fill"
    }
  ]);
  
  series.data.setAll(data);
  yAxis.data.setAll(data);
  
  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
  cursor.lineX.set("visible", false);
  cursor.lineY.set("visible", false);
  
  cursor.events.on("cursormoved", function() {
    var dataItem = series.get("tooltip").dataItem;
    if (dataItem) {
      handleHover(dataItem)
    }
    else {
      handleOut();
    }
  })
  
  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear();
  chart.appear(1000, 100);
});