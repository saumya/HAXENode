import js.Lib;
import js.Lib.alert;
//import js.JQuery;
import js.html.Document;
import js.html.DOMWindow;
//
import com.jungle.Tree;
import com.jungle.Animal;
import com.jungle.Jungle;

//@:expose("SaumyaLib.ApplicationEntry")
class ApplicationEntry
{
	public function new(){
		trace("ApplicationEntry:Constructor");
        var j:Jungle = new Jungle();
        trace(j.isKingAvailable());
        trace(j.getAllTrees());
	}

    //Entry point
	static function main() {
		trace("main");
        var ApplicationEntry = new ApplicationEntry();
    }
}
