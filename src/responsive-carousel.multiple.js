/*
 * responsive-carousel multiple extension
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2014 Ron. Adams
 * Licensed under the MIT license.
 */

(function( $, undefined ) {
    var pluginName = "carousel",
        initSelector = "." + pluginName,
        methods = {
            /* overrides the goTo on the responsive carousel plugin */
            m_goTo: function( num ){
                if( num === '+1' ) { // next
                    // move first child after the last
                    $( '.carousel-item' )
                        .last()
                        .after( $('.carousel-item').first() );
                }
                if( num === '-1' ) { // prev
                    // move last child before the first
                    var lastChild = $( '.carousel-item' ).last(),
                        firstChild = $( '.carousel-item' ).first();
                    $( firstChild ).before( $( lastChild ) );
                }
            },

            m_next: function(){
                $( this )[ pluginName ]( "m_goTo", "+1" );
            },

            m_prev: function(){
                $( this )[ pluginName ]( "m_goTo", "-1" );
            },

            _bindMultipleEventListeners: function(){
                var $elem = $( this )
                    .bind( "click", function( e ){
                        var targ = $( e.target ).closest( "a[href='#next'],a[href='#prev']" );
                        if( targ.length ){
                            $elem[ pluginName ]( targ.is( "[href='#next']" ) ? "m_next" : "m_prev" );
                            e.preventDefault();
                        }
                    });
                return this;
            },

            _initMultiple : function(){
                var multipleAttr = $( this ).attr( "data-multiple" ),
                    multiple = ( multipleAttr !== undefined ) ?
                        ( multipleAttr.toLowerCase() !== "false" ) :
                        false;
                if( multiple === true ) {
                    $( this )[ pluginName ]( "_bindMultipleEventListeners" );
                }
            }
        };

    // add methods
    $.extend( $.fn[ pluginName ].prototype, methods ); 

    // DOM-ready auto-init
    $( document ).on( "create." + pluginName, initSelector, function(){
        $( this )[ pluginName ]( "_initMultiple" );
    } );

}(jQuery));
