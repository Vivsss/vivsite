window.onload=function() {

    /* Tasks barra sinistra */
      var artDirection = $("#tasks a[name='art direction']");
      var webDesign = $("#tasks a[name='web design - frontend']");
      var backend = $("#tasks a[name='backend développement']");
      var responsive = $("#tasks a[name='responsive design']");
      var ux = $("#tasks a[name='ux']");
      var graphic = $("#tasks a[name='conception graphique']");
      var branding = $("#tasks a[name='branding']");
      var logo = $("#tasks a[name='logo']");
      var illustration = $("#tasks a[name='illustration']");

    /* Projects barra sinistra */
      var black = $("#left-section a[name='black'] ");
      var emoticon = $("#left-section a[name='emoticon'] ");
      var anna = $("#left-section a[name='annamaria ajmone'] ");
      var anbar = $("#left-section a[name='anbar'] ");
      var ek = $("#left-section a[name='ethikonsulting'] ");
      var makeda = $("#left-section a[name='makeda'] ");
      var cocciuto = $("#left-section a[name='la cocciutaggine'] ");
      var cane = $("#left-section a[name='il cane, la notte e il coltello'] ");
      var efest = $("#left-section a[name='portaits imaginaires'] ");


      var borderWidth = "3px";

  /* se SVG SFONDO è definito */
  if (document.getElementById("svg_sfondo")){

      var object = document.getElementById("svg_sfondo");
      var svgDocument = object.contentDocument;
      var url = document.location.pathname;

      /* Masks SVG */
  /*    var blackSVG = $("svg #black", svgDocument);
      var emoticonSVG = $("svg #emoticon", svgDocument);
      var annaSVG = $("svg #anna", svgDocument);
      var anbarSVG = $("svg #anbar", svgDocument);
      var ekSVG = $("svg #ek", svgDocument);
      var makedaSVG = $("svg #makeda", svgDocument);
      var cocciutoSVG = $("svg #cocciutaggine1", svgDocument);
      var caneSVG = $("svg #cane", svgDocument);
      var efestSVG = $("svg #efest", svgDocument);
*/

      /* per TUTTE le pagine */
           /* illumina bordo work al sorvolo su relativo svg */
            $("svg #anna", svgDocument).hover(function(){
                anna.css({"border-right-color":"#000000","border-right-style":"solid","border-right-width":borderWidth});
                }, function(){
                anna.css("border-right-color", "transparent");
           });
           $("svg #anbar", svgDocument).hover(function(){
                anbar.css({"border-right-color":"#000000","border-right-style":"solid","border-right-width":borderWidth});
                }, function(){
                anbar.css("border-right-color", "transparent");
           });
           $("svg #makeda", svgDocument).hover(function(){
                makeda.css({"border-right-color":"#000000","border-right-style":"solid","border-right-width":borderWidth});
                }, function(){
                makeda.css("border-right-color", "transparent");
           });
           $("svg #emoticon", svgDocument).hover(function(){
                emoticon.css({"border-right-color":"#000000","border-right-style":"solid","border-right-width":borderWidth});
                }, function(){
                emoticon.css("border-right-color", "transparent");
           });
           $("svg #black", svgDocument).hover(function(){
                black.css({"border-right-color":"#000000","border-right-style":"solid","border-right-width":borderWidth});
                }, function(){
                black.css("border-right-color", "transparent");
           });
           $("svg #efest", svgDocument).hover(function(){
                efest.css({"border-right-color":"#000000","border-right-style":"solid","border-right-width":borderWidth});
                }, function(){
                efest.css("border-right-color", "transparent");
           });
           $("svg #ek", svgDocument).hover(function(){
                ek.css({"border-right-color":"#000000","border-right-style":"solid","border-right-width":borderWidth});
                }, function(){
                ek.css("border-right-color", "transparent");
           });
           $("svg #cocciutaggine1", svgDocument).hover(function(){
                cocciuto.css({"border-right-color":"#000000","border-right-style":"solid","border-right-width":borderWidth});
                }, function(){
                cocciuto.css("border-right-color", "transparent");
           });
           $("svg #cane", svgDocument).hover(function(){
                cane.css({"border-right-color":"#000000","border-right-style":"solid","border-right-width":borderWidth});
                }, function(){
                cane.css("border-right-color", "transparent");
           });

      /* Per HOMEPAGE */
      if(url=="/index/"){

          var first = " #666666";
          var second = "#0d0d0d";
           /* illumina svg quando sorvolati + illumina bordo work al sorvolo su relativo svg */
           $("svg #anna", svgDocument).hover(function(){
                $("svg #anna", svgDocument).css("opacity","0.4");
                }, function(){
                $("svg #anna", svgDocument).css("opacity","0.8");
           });
           $("svg #anbar", svgDocument).hover(function(){
                $("svg #anbar", svgDocument).css("opacity","0.4");
                }, function(){
                $("svg #anbar", svgDocument).css("opacity","0.9");
           });
           $("svg #makeda", svgDocument).hover(function(){
                $("svg #makeda", svgDocument).css("opacity","0.4");
                }, function(){
                $("svg #makeda", svgDocument).css("opacity","1");
           });
           $("svg #emoticon", svgDocument).hover(function(){
                $("svg #emoticon", svgDocument).css("opacity","0.4");
                }, function(){
                $("svg #emoticon", svgDocument).css("opacity","0.8");
           });
           $("svg #black", svgDocument).hover(function(){
                $("svg #black", svgDocument).css("opacity","0.4");
                }, function(){
                $("svg #black", svgDocument).css("opacity","0.8");
           });
           $("svg #efest", svgDocument).hover(function(){
                $("svg #efest", svgDocument).css("opacity","0.7");
                }, function(){
                $("svg #efest", svgDocument).css("opacity","0.9");
           });
           $("svg #ek", svgDocument).hover(function(){
                $("svg #ek", svgDocument).css("opacity","0.2");
                console.log("ok");
                }, function(){
                $("svg #ek", svgDocument).css("opacity","0.9");
           });
           $("svg #cocciutaggine1", svgDocument).hover(function(){
                $("svg #cocciutaggine1", svgDocument).css("opacity","0.4");
                }, function(){
                $("svg #cocciutaggine1", svgDocument).css("opacity","0.9");
           });
           $("svg #cane", svgDocument).hover(function(){
                $("svg #cane", svgDocument).css("opacity","1");
                }, function(){
                $("svg #cane", svgDocument).css("opacity","0");
           });

           /* illumina svg al sorvolo su relativo progetto */
         /*   lightProject(black,blackSVG);
            lightProject(emoticon,emoticonSVG);
            lightProject(anna,annaSVG);
            lightProject(anbar,anbarSVG);
            lightProject(ek,ekSVG);
            lightProject(makeda,makedaSVG);
            lightProject(cocciuto,cocciutoSVG);
            lightProject(cane,caneSVG);
            lightProject(efest,efestSVG);

            function lightProject(project, svgMask){
                    project.hover(function(){
                            svgMask.css("opacity","1");
                            }, function(){
                            svgMask.css("opacity","0");
                    });

            }*/

          /* illumina bordo task al sorvolo su relativo svg */
          $("svg .art_direction", svgDocument).hover(function(){
            artDirection.css({"border-right-color":"#ff4d4d","border-right-style":"solid","border-right-width":borderWidth});
            }, function(){
            artDirection.css("border-right-color", "transparent");
          });
          $("svg .web_design", svgDocument).hover(function(){
            webDesign.css({"border-right-color":"#9999ff","border-right-style":"solid","border-right-width":borderWidth});
            }, function(){
            webDesign.css("border-right-color", "transparent");
          });
          $("svg .backend", svgDocument).hover(function(){
            backend.css({"border-right-color":second,"border-right-style":"solid","border-right-width":borderWidth});
            }, function(){
            backend.css("border-right-color", "transparent");
          });
          $("svg .responsive", svgDocument).hover(function(){
            responsive.css({"border-right-color":"#00cca3","border-right-style":"solid","border-right-width":borderWidth});
            }, function(){
            responsive.css("border-right-color", "transparent");
          });
          $("svg .ux", svgDocument).hover(function(){
            ux.css({"border-right-color":"#0066cc","border-right-style":"solid","border-right-width":borderWidth});
            }, function(){
            ux.css("border-right-color", "transparent");
          });
          $("svg .graphic", svgDocument).hover(function(){
            graphic.css({"border-right-color":"#001a33","border-right-style":"solid","border-right-width":borderWidth});
            }, function(){
            graphic.css("border-right-color", "transparent");
          });
          $("svg .branding", svgDocument).hover(function(){
            branding.css({"border-right-color":"#ffb31a","border-right-style":"solid","border-right-width":borderWidth});
            }, function(){
            branding.css("border-right-color", "transparent");
          });
          $("svg .logo", svgDocument).hover(function(){
            logo.css({"border-right-color":"#ff0066","border-right-style":"solid","border-right-width":borderWidth});
            }, function(){
            logo.css("border-right-color", "transparent");
          });
          $("svg .illustration", svgDocument).hover(function(){
            illustration.css({"border-right-color":"#00cc66","border-right-style":"solid","border-right-width":borderWidth});
            }, function(){
            illustration.css("border-right-color", "transparent");
          });


           /* hover su tasks illumina svg */
           artDirection.hover(function(){
                   $("svg .web_design", svgDocument).css("opacity","0");
                    $("svg .backend", svgDocument).css("opacity","0");
                    $("svg .responsive", svgDocument).css("opacity","0");
                     $("svg .ux", svgDocument).css("opacity","0");
                      $("svg .graphic", svgDocument).css("opacity","0");
                       $("svg .branding", svgDocument).css("opacity","0");
                        $("svg .logo", svgDocument).css("opacity","0");
                        $("svg .illustration", svgDocument).css("opacity","0");
                        $("svg .art_direction", svgDocument).css("opacity","0.9");
            }, function(){
                $("svg .web_design", svgDocument).css("opacity","0.8");
                    $("svg .backend", svgDocument).css("opacity","0.8");
                    $("svg .responsive", svgDocument).css("opacity","0.8");
                     $("svg .ux", svgDocument).css("opacity","0.8");
                      $("svg .graphic", svgDocument).css("opacity","0.8");
                       $("svg .branding", svgDocument).css("opacity","0.8");
                        $("svg .logo", svgDocument).css("opacity","0.8");
                        $("svg .illustration", svgDocument).css("opacity","0.9");
           });
           webDesign.hover(function(){
                    $("svg .backend", svgDocument).css("opacity","0");
                    $("svg .responsive", svgDocument).css("opacity","0");
                     $("svg .ux", svgDocument).css("opacity","0");
                      $("svg .graphic", svgDocument).css("opacity","0");
                       $("svg .branding", svgDocument).css("opacity","0");
                        $("svg .logo", svgDocument).css("opacity","0");
                        $("svg .illustration", svgDocument).css("opacity","0");
                        $("svg .art_direction", svgDocument).css("opacity","0");
                         $("svg .web_design", svgDocument).css("opacity","0.9");

            }, function(){
                    $("svg .backend", svgDocument).css("opacity","0.8");
                    $("svg .responsive", svgDocument).css("opacity","0.8");
                     $("svg .ux", svgDocument).css("opacity","0.8");
                      $("svg .graphic", svgDocument).css("opacity","0.8");
                       $("svg .branding", svgDocument).css("opacity","0.8");
                        $("svg .logo", svgDocument).css("opacity","0.8");
                        $("svg .illustration", svgDocument).css("opacity","0.9");
                         $("svg .art_direction", svgDocument).css("opacity","0.8");
           });
           backend.hover(function(){
                    $("svg .responsive", svgDocument).css("opacity","0");
                     $("svg .ux", svgDocument).css("opacity","0");
                      $("svg .graphic", svgDocument).css("opacity","0");
                       $("svg .branding", svgDocument).css("opacity","0");
                        $("svg .logo", svgDocument).css("opacity","0");
                        $("svg .illustration", svgDocument).css("opacity","0");
                        $("svg .art_direction", svgDocument).css("opacity","0");
                         $("svg .web_design", svgDocument).css("opacity","0");
                                  $("svg .backend", svgDocument).css("opacity","0.9");
            }, function(){
                    $("svg .responsive", svgDocument).css("opacity","0.8");
                     $("svg .ux", svgDocument).css("opacity","0.8");
                      $("svg .graphic", svgDocument).css("opacity","0.8");
                       $("svg .branding", svgDocument).css("opacity","0.8");
                        $("svg .logo", svgDocument).css("opacity","0.8");
                        $("svg .illustration", svgDocument).css("opacity","0.9");
                         $("svg .art_direction", svgDocument).css("opacity","0.8");
                          $("svg .web_design", svgDocument).css("opacity","0.8");
           });
           responsive.hover(function(){
                     $("svg .ux", svgDocument).css("opacity","0");
                      $("svg .graphic", svgDocument).css("opacity","0");
                       $("svg .branding", svgDocument).css("opacity","0");
                        $("svg .logo", svgDocument).css("opacity","0");
                        $("svg .illustration", svgDocument).css("opacity","0");
                        $("svg .art_direction", svgDocument).css("opacity","0");
                         $("svg .web_design", svgDocument).css("opacity","0");
                                  $("svg .backend", svgDocument).css("opacity","0");
                                                     $("svg .responsive", svgDocument).css("opacity","0.9");
            }, function(){
                 $("svg .backend", svgDocument).css("opacity","0.8");
                     $("svg .ux", svgDocument).css("opacity","0.8");
                      $("svg .graphic", svgDocument).css("opacity","0.8");
                       $("svg .branding", svgDocument).css("opacity","0.8");
                        $("svg .logo", svgDocument).css("opacity","0.8");
                        $("svg .illustration", svgDocument).css("opacity","0.9");
                         $("svg .art_direction", svgDocument).css("opacity","0.8");
                          $("svg .web_design", svgDocument).css("opacity","0.8");
           });
           ux.hover(function(){
                      $("svg .graphic", svgDocument).css("opacity","0");
                       $("svg .branding", svgDocument).css("opacity","0");
                        $("svg .logo", svgDocument).css("opacity","0");
                        $("svg .illustration", svgDocument).css("opacity","0");
                        $("svg .art_direction", svgDocument).css("opacity","0");
                         $("svg .web_design", svgDocument).css("opacity","0");
                          $("svg .backend", svgDocument).css("opacity","0");
                           $("svg .responsive", svgDocument).css("opacity","0");
                          $("svg .ux", svgDocument).css("opacity","0.9");
            }, function(){
                $("svg .backend", svgDocument).css("opacity","0.8");
                      $("svg .graphic", svgDocument).css("opacity","0.8");
                       $("svg .branding", svgDocument).css("opacity","0.8");
                        $("svg .logo", svgDocument).css("opacity","0.8");
                        $("svg .illustration", svgDocument).css("opacity","0.9");
                         $("svg .art_direction", svgDocument).css("opacity","0.8");
                          $("svg .web_design", svgDocument).css("opacity","0.8");
                                  $("svg .responsive", svgDocument).css("opacity","0.9");
           });
           graphic.hover(function(){
                       $("svg .branding", svgDocument).css("opacity","0");
                        $("svg .logo", svgDocument).css("opacity","0");
                        $("svg .illustration", svgDocument).css("opacity","0");
                        $("svg .art_direction", svgDocument).css("opacity","0");
                         $("svg .web_design", svgDocument).css("opacity","0");
                          $("svg .backend", svgDocument).css("opacity","0");
                           $("svg .responsive", svgDocument).css("opacity","0");
                          $("svg .ux", svgDocument).css("opacity","0");
                          $("svg .graphic", svgDocument).css("opacity","0.9");
            }, function(){
                $("svg .backend", svgDocument).css("opacity","0.8");
                      $("svg .ux", svgDocument).css("opacity","0.8");
                       $("svg .branding", svgDocument).css("opacity","0.8");
                        $("svg .logo", svgDocument).css("opacity","0.8");
                        $("svg .illustration", svgDocument).css("opacity","0.9");
                         $("svg .art_direction", svgDocument).css("opacity","0.8");
                          $("svg .web_design", svgDocument).css("opacity","0.8");
                                  $("svg .responsive", svgDocument).css("opacity","0.8");
           });
           branding.hover(function(){
                        $("svg .logo", svgDocument).css("opacity","0");
                        $("svg .illustration", svgDocument).css("opacity","0");
                        $("svg .art_direction", svgDocument).css("opacity","0");
                         $("svg .web_design", svgDocument).css("opacity","0");
                          $("svg .backend", svgDocument).css("opacity","0");
                           $("svg .responsive", svgDocument).css("opacity","0");
                          $("svg .ux", svgDocument).css("opacity","0");
                          $("svg .graphic", svgDocument).css("opacity","0");
                          $("svg .branding", svgDocument).css("opacity","0.9");
            }, function(){
                $("svg .backend", svgDocument).css("opacity","0.8");
                      $("svg .ux", svgDocument).css("opacity","0.8");
                       $("svg .graphic", svgDocument).css("opacity","0.8");
                        $("svg .logo", svgDocument).css("opacity","0.8");
                        $("svg .illustration", svgDocument).css("opacity","0.9");
                         $("svg .art_direction", svgDocument).css("opacity","0.8");
                          $("svg .web_design", svgDocument).css("opacity","0.8");
                                  $("svg .responsive", svgDocument).css("opacity","0.8");
           });
           logo.hover(function(){
                        $("svg .illustration", svgDocument).css("opacity","0");
                        $("svg .art_direction", svgDocument).css("opacity","0");
                         $("svg .web_design", svgDocument).css("opacity","0");
                          $("svg .backend", svgDocument).css("opacity","0");
                           $("svg .responsive", svgDocument).css("opacity","0");
                          $("svg .ux", svgDocument).css("opacity","0");
                          $("svg .graphic", svgDocument).css("opacity","0");
                          $("svg .branding", svgDocument).css("opacity","0");
                          $("svg .logo", svgDocument).css("opacity","0.9");
            }, function(){
                 $("svg .backend", svgDocument).css("opacity","0.8");
                      $("svg .ux", svgDocument).css("opacity","0.8");
                       $("svg .graphic", svgDocument).css("opacity","0.8");
                        $("svg .branding", svgDocument).css("opacity","0.8");
                        $("svg .illustration", svgDocument).css("opacity","0.9");
                         $("svg .art_direction", svgDocument).css("opacity","0.8");
                          $("svg .web_design", svgDocument).css("opacity","0.8");
                                  $("svg .responsive", svgDocument).css("opacity","0.8");
           });
           illustration.hover(function(){
                        $("svg .art_direction", svgDocument).css("opacity","0");
                         $("svg .web_design", svgDocument).css("opacity","0");
                          $("svg .backend", svgDocument).css("opacity","0");
                           $("svg .responsive", svgDocument).css("opacity","0");
                          $("svg .ux", svgDocument).css("opacity","0");
                          $("svg .graphic", svgDocument).css("opacity","0");
                          $("svg .branding", svgDocument).css("opacity","0");
                          $("svg .logo", svgDocument).css("opacity","0");
                          $("svg .illustration", svgDocument).css("opacity","0.9");
            }, function(){
                $("svg .backend", svgDocument).css("opacity","0.8");
                      $("svg .ux", svgDocument).css("opacity","0.8");
                       $("svg .graphic", svgDocument).css("opacity","0.8");
                        $("svg .branding", svgDocument).css("opacity","0.8");
                        $("svg .logo", svgDocument).css("opacity","0.8");
                         $("svg .art_direction", svgDocument).css("opacity","0.8");
                          $("svg .web_design", svgDocument).css("opacity","0.8");
                                  $("svg .responsive", svgDocument).css("opacity","0.8");
           });
      }

      /* Per TASK pages */
      if(url == "/index/task/12/") {
        /* hover su svg */
          $("svg .mask", svgDocument).css('opacity','0');
        $("svg .art_direction", svgDocument).css("opacity","1");
        artDirection.css({"border-right-color":"#ff4d4d","border-right-style":"solid","border-right-width":borderWidth,'background-color': '#eee'});
      }
      if(url == "/index/task/13/") {
        /* hover su svg */
          $("svg .mask", svgDocument).css('opacity','0');
        $("svg .web_design", svgDocument).css("opacity","1");
        webDesign.css({"border-right-color":"#9999ff","border-right-style":"solid","border-right-width":borderWidth,'background-color': '#eee'});
      }
      if(url == "/index/task/15/") {
        /* hover su svg */
          $("svg .mask", svgDocument).css('opacity','0');
        $("svg .backend", svgDocument).css("opacity","1");
        backend.css({"border-right-color":second,"border-right-style":"solid","border-right-width":borderWidth,'background-color': '#eee'});
      }
      if(url == "/index/task/16/") {
        /* hover su svg */
          $("svg .mask", svgDocument).css('opacity','0');
        $("svg .responsive", svgDocument).css("opacity","1");
        responsive.css({"border-right-color":"#00cca3","border-right-style":"solid","border-right-width":borderWidth,'background-color': '#eee'});

      }
      if(url == "/index/task/17/") {
        /* hover su svg */
          $("svg .mask", svgDocument).css('opacity','0');
        $("svg .ux", svgDocument).css("opacity","1");
        ux.css({"border-right-color":"#0066cc","border-right-style":"solid","border-right-width":borderWidth,'background-color': '#eee'});
      }
      if(url == "/index/task/18/") {
        /* hover su svg */
          $("svg .mask", svgDocument).css('opacity','0');
        $("svg .graphic", svgDocument).css("opacity","1");
        graphic.css({"border-right-color":"#001a33","border-right-style":"solid","border-right-width":borderWidth,'background-color': '#eee'});
      }
      if(url == "/index/task/19/") {
        /* hover su svg */
          $("svg .mask", svgDocument).css('opacity','0');
        $("svg .branding", svgDocument).css("opacity","1");
        branding.css({"border-right-color":"#ffb31a","border-right-style":"solid","border-right-width":borderWidth,'background-color': '#eee'});
      }
      if(url == "/index/task/20/") {
        /* hover su svg */
          $("svg .mask", svgDocument).css('opacity','0');
        $("svg .logo", svgDocument).css("opacity","1");
        logo.css({"border-right-color":"#ff0066","border-right-style":"solid","border-right-width":borderWidth,'background-color': '#eee'});
      }
      if(url == "/index/task/21/") {
        /* hover su svg */
          $("svg .mask", svgDocument).css('opacity','0');
        $("svg .illustration", svgDocument).css("opacity","1");
        illustration.css({"border-right-color":"#00cc66","border-right-style":"solid","border-right-width":borderWidth,'background-color': '#eee'});

      }

  }

        console.log(document.location.search );
  /* nelle PAGINE DETTAGLI PROGETTO tasks di lato rimangono illuminate */
      /* BLACK */
      if(document.location.search == "?page=1"){
            $(".works li[name='black']").css({"border-right-color":"#000000","border-right-style":"solid","border-right-width":borderWidth});
            webDesign.css({"border-right-color":"#9999ff","border-right-style":"solid","border-right-width":borderWidth});
            responsive.css({"border-right-color":"#00cca3","border-right-style":"solid","border-right-width":borderWidth});
            ux.css({"border-right-color":"#0066cc","border-right-style":"solid","border-right-width":borderWidth});
            graphic.css({"border-right-color":"#001a33","border-right-style":"solid","border-right-width":borderWidth});
      }
       /* EMOTICON */
      if(document.location.search == "?page=2"){
            $(".works li[name='emoticon']").css({"border-right-color":"#000000","border-right-style":"solid","border-right-width":borderWidth});
            artDirection.css({"border-right-color":"#ff4d4d","border-right-style":"solid","border-right-width":borderWidth});
            webDesign.css({"border-right-color":"#9999ff","border-right-style":"solid","border-right-width":borderWidth});
            backend.css({"border-right-color":second,"border-right-style":"solid","border-right-width":borderWidth});
            responsive.css({"border-right-color":"#00cca3","border-right-style":"solid","border-right-width":borderWidth});
            ux.css({"border-right-color":"#0066cc","border-right-style":"solid","border-right-width":borderWidth});
            branding.css({"border-right-color":"#ffb31a","border-right-style":"solid","border-right-width":borderWidth});
      }
      /* ANNAMARIA */
      if(document.location.search == "?page=3"){
            $(".works li[name='annamaria ajmone']").css({"border-right-color":"#000000","border-right-style":"solid","border-right-width":borderWidth});
            artDirection.css({"border-right-color":"#ff4d4d","border-right-style":"solid","border-right-width":borderWidth});
            webDesign.css({"border-right-color":"#9999ff","border-right-style":"solid","border-right-width":borderWidth});
            ux.css({"border-right-color":"#0066cc","border-right-style":"solid","border-right-width":borderWidth});
            graphic.css({"border-right-color":"#001a33","border-right-style":"solid","border-right-width":borderWidth});
            branding.css({"border-right-color":"#ffb31a","border-right-style":"solid","border-right-width":borderWidth});
            logo.css({"border-right-color":"#ff0066","border-right-style":"solid","border-right-width":borderWidth});
      }
      /* ANBAR */
      if(document.location.search == "?page=4"){
            $(".works li[name='anbar']").css({"border-right-color":"#000000","border-right-style":"solid","border-right-width":borderWidth});
            artDirection.css({"border-right-color":"#ff4d4d","border-right-style":"solid","border-right-width":borderWidth});
            graphic.css({"border-right-color":"#001a33","border-right-style":"solid","border-right-width":borderWidth});
            branding.css({"border-right-color":"#ffb31a","border-right-style":"solid","border-right-width":borderWidth});
            logo.css({"border-right-color":"#ff0066","border-right-style":"solid","border-right-width":borderWidth});
      }
      /* ETHIKONSULTING */
      if(document.location.search == "?page=5"){
            $(".works li[name='ethikonsulting']").css({"border-right-color":"#000000","border-right-style":"solid","border-right-width":borderWidth});
            artDirection.css({"border-right-color":"#ff4d4d","border-right-style":"solid","border-right-width":borderWidth});
            webDesign.css({"border-right-color":"#9999ff","border-right-style":"solid","border-right-width":borderWidth});
            backend.css({"border-right-color":second,"border-right-style":"solid","border-right-width":borderWidth});
            responsive.css({"border-right-color":"#00cca3","border-right-style":"solid","border-right-width":borderWidth});
            ux.css({"border-right-color":"#0066cc","border-right-style":"solid","border-right-width":borderWidth});
            graphic.css({"border-right-color":"#001a33","border-right-style":"solid","border-right-width":borderWidth});
            branding.css({"border-right-color":"#ffb31a","border-right-style":"solid","border-right-width":borderWidth});
            logo.css({"border-right-color":"#ff0066","border-right-style":"solid","border-right-width":borderWidth});
      }
      /* MAKEDA */
      if(document.location.search == "?page=6"){
            $(".works li[name='makeda']").css({"border-right-color":"#000000","border-right-style":"solid","border-right-width":borderWidth});
            branding.css({"border-right-color":"#ffb31a","border-right-style":"solid","border-right-width":borderWidth});
            logo.css({"border-right-color":"#ff0066","border-right-style":"solid","border-right-width":borderWidth});
      }
       /* COCCIUTAGGINE */
      if(document.location.search == "?page=7"){
            $(".works li[name='la cocciutaggine']").css({"border-right-color":"#000000","border-right-style":"solid","border-right-width":borderWidth});
            graphic.css({"border-right-color":"#001a33","border-right-style":"solid","border-right-width":borderWidth});
            illustration.css({"border-right-color":"#00cc66","border-right-style":"solid","border-right-width":borderWidth});
      }
      /* CANE */
      if(document.location.search == "?page=8"){
            $(".works li[name='il cane, la notte e il coltello']").css({"border-right-color":"#000000","border-right-style":"solid","border-right-width":borderWidth});
            illustration.css({"border-right-color":"#00cc66","border-right-style":"solid","border-right-width":borderWidth});
      }
       /* EFESTIADE */
      if(document.location.search == "?page=9"){
            $(".works li[name='portaits imaginaires']").css({"border-right-color":"#000000","border-right-style":"solid","border-right-width":borderWidth});
            illustration.css({"border-right-color":"#00cc66","border-right-style":"solid","border-right-width":borderWidth});
      }

};
