<?php


namespace App\Services;


abstract class Service
{
    protected static $instances = [];

    public static function getInstance()
    {
        $cls = static::class;

        return isset(static::$instances[$cls])
            ? static::$instances[$cls]
            : static::$instances[$cls] = new static();
    }

    final protected function __construct()
    {
        static::init();
    }

    final public function __clone() {
        throw new \Exception("Cannot unserialize a singleton.");
    }

    final public function __wakeup() {
        throw new \Exception("Cannot unserialize a singleton.");
    }

    protected function init()
    {}
}
