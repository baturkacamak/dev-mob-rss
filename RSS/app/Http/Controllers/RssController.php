<?php

namespace App\Http\Controllers;

use Curl\Curl;
use App\DevMob\Rss;
use Illuminate\Http\Request;

use App\Http\Requests;
use MarkWilson\XmlToJson\XmlToJsonConverter;

class RssController extends Controller
{

    protected $curl;
    protected $rss;
    protected $xmlToJsonConverter;

    /**
     * Create a new controller instance.
     *
     * @param Curl $curl
     * @param Rss $rss
     * @param XmlToJsonConverter $xmlToJsonConverter
     */
    function __construct(Curl $curl, Rss $rss, XmlToJsonConverter $xmlToJsonConverter)
    {
        $this->curl = $curl;
        $this->rss = $rss;
        $this->xmlToJsonConverter = $xmlToJsonConverter;
    }

    public function index()
    {
        $dataJson = $this->rss->getData('json');
        return response()->json($dataJson);
    }


    public function show($id)
    {
        // RSS Data
        $data = $this->rss->getData();

        // Set URL
        $url = $data[$id]['source-url'];

        // Get XML
        $this->curl->get($url);
        $xml = $this->curl->response;

        // Convert XML to JSON
        $json = $this->xmlToJsonConverter->convert(simplexml_load_string($xml));

        return response()->json($json);

    }

}
