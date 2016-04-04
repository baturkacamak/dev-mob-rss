<?php
/**
 * Created by PhpStorm.
 * User: batur
 * Date: 3/4/2016
 * Time: 23:38 PM
 */

namespace App\DevMob;


class Rss {

    protected $data;

    function __construct()
    {
        /*
         * TODO:
         * Call should be done from DB
         */
        $data = [
            [
                'source-name' => 'Wired',
                'source-url' => 'http://feeds.wired.com/wired/index'
            ],
            [
                'source-name' => 'Ars Technica',
                'source-url' => 'http://feeds.arstechnica.com/arstechnica/index?format=xml'
            ],
            [
                'source-name' => 'The Next Web',
                'source-url' => 'http://feeds2.feedburner.com/thenextweb'
            ]
        ];
        $this->setData($data);
    }


    /**
     * @param string $type
     * @return string \\ array
     */
    public function getData($type = 'array')
    {
        if ($type === 'json') {
            return json_encode($this->data);
        }
        return $this->data;
    }

    /**
     * @param array $data
     */
    protected function setData($data)
    {
        $this->data = $data;
    }

    public function convertXmltoJson(){
        
    }
    
}