/** 
 * @class easyXSS.Events
 * Contains methods for dealing with special events needed to support the library
 * @singleton
 */
easyXSS.Events = (function(){
    /**
     * Hashtable for storing callbacks when using hashTransport
     * @private
     */
    var onReadyCallbacks = {};
    return {
        /**
         * Register a callback that can be called when hash.html is fully loaded.
         * @param {String} channel The name of the channel
         * @param {Function} callback The function to call
         */
        registerOnReady: function(channel, callback){
            // #ifdef debug
            easyXSS.Debug.trace("registering onReady callback for channel " + channel);
            // #endif
            onReadyCallbacks[channel] = callback;
        },
        /**
         * Call the onReady method associated with the channel
         * @param {String} channel The name of the channel
         */
        onReady: function(channel){
            // #ifdef debug
            easyXSS.Debug.trace("executing onReady calback for channel " + channel);
            // #endif
            var fn = this.onReadyCallbacks[channel];
            if (fn) {
                fn();
                delete onReadyCallbacks[channel];
            }
        }
    };
}());
