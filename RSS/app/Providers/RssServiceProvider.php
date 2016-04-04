<?php

namespace App\Providers;

use Curl\Curl;
use Illuminate\Support\ServiceProvider;
use MarkWilson\XmlToJson\XmlToJsonConverter;

class RssServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind('Curl', function ($app) {
            return new Curl($app['Curl']);
        });

        $this->app->bind('XmlToJsonConverter', function ($app) {
            return new XmlToJsonConverter($app['XmlToJsonConverter']);
        });

    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
