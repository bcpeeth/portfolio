<?php

namespace Concrete\Package\Portfolio;

use Concrete\Core\Package\Package;
use Concrete\Core\Page\Page;
use Concrete\Core\Page\Theme\Theme;
use Core;

defined('C5_EXECUTE') or die(_("Access Denied."));

class Controller extends Package {
  protected $pkgHandle  = 'portfolio';
  protected $pkgVersion = '1.0.0';

  protected $appVersionRequired = '5.7.0';

  public function getPackageDescription() {
    return t('Adds the Portfolio theme.');
  }

  public function getPackageName(){
    return t('Portfolio');
  }

  public function install() {
    $pkg = parent::install();
    Theme::add('portfolio', $pkg);
  }
}

